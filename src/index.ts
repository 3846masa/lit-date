import DateProxy from './DateProxy';

type DateProxyType = DateProxy;
type DateKeys = keyof DateProxy;
type DateProxyFunction = (date: DateProxy) => any;

const litdate = (strArr: TemplateStringsArray, ...args: (DateKeys | DateProxyFunction)[]) => (date: Date) => {
  const proxy = new DateProxy(date);
  return String.raw(strArr, ...args.map((argv) => (typeof argv === 'string' ? proxy[argv] : argv(proxy))));
};

export default litdate;
export { DateKeys, DateProxyType as DateProxy, DateProxyFunction };
