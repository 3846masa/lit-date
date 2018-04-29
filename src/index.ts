import { DateKeys, DateProxy, DateProxyFunction } from './types';
import proxyFunctions, { proxyFunctionKeys } from './proxy-functions';
import stringRaw from './string-raw';

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

const fdate = (strArr: TemplateStringsArray, ...args: (DateKeys | DateProxyFunction)[]) => (date: Date) => {
  const proxy = wrap(date);
  return stringRaw(strArr, ...args.map((argv) => (typeof argv === 'string' ? proxy[argv] : argv(proxy))));
};

export default fdate;
export { DateKeys, DateProxy, DateProxyFunction };
