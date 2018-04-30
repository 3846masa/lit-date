import DateProxy from './DateProxy';
import stringRaw from './string-raw';

type DateProxyType = DateProxy;
type DateKeys = keyof DateProxy;
type DateProxyFunction = (date: DateProxy) => any;

const fdate = (strArr: TemplateStringsArray, ...args: (DateKeys | DateProxyFunction)[]) => (date: Date) => {
  const proxy = new DateProxy(date);
  return stringRaw(strArr, ...args.map((argv) => (typeof argv === 'string' ? proxy[argv] : argv(proxy))));
};

export default fdate;
export { DateKeys, DateProxyType as DateProxy, DateProxyFunction };
