import { DateKeys, DateProxy, DateProxyFunction } from './types';
import proxyFunctions, { proxyFunctionKeys } from './proxy-functions';

const wrap = (date: Date) => {
  const proxy: DateProxy = new Proxy({} as any, {
    get(_target, key: DateKeys) {
      return proxyFunctionKeys.has(key) ? proxyFunctions[key].call(proxy, date) : undefined;
    },
    has(_target, key: any) {
      return proxyFunctionKeys.has(key);
    },
    ownKeys: () => Object.getOwnPropertyNames(proxyFunctions),
  });
  return proxy;
};

const fdate = (strArr: TemplateStringsArray, ...argv: (DateKeys | DateProxyFunction)[]) => (date: Date) => {
  const proxy = wrap(date);
  return String.raw(strArr, ...argv.map((args) => (typeof args === 'string' ? proxy[args] : args(proxy))));
};

export default fdate;
export { DateKeys, DateProxy, DateProxyFunction };
