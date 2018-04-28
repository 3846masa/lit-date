export interface DateProxy {
  /** Month. */
  month: number;
  /** Month. */
  M: number;
  /*+ Padded month */
  MM: string;
  /** Quarter */
  quarter: number;
  /** Quarter */
  Q: number;
  /** Day of month */
  day: number;
  /** Day of month */
  D: number;
  /** Padded day of month */
  DD: string;
  /** Day of week */
  dayOfWeek: number;
  /** Day of week */
  d: number;
  /** Year */
  year: number;
  /** Year (2 degits) */
  YY: number;
  /** Year (4 degits) */
  YYYY: number;
  /** AM / PM */
  AM_PM: 'AM' | 'PM';
  /** AM / PM */
  A: 'AM' | 'PM';
  /** Hour (0-23) */
  hour: number;
  /** Hour (0-23) */
  H: number;
  /** Padded Hour (0-23) */
  HH: string;
  /** Hour (1-12) */
  h: number;
  /** Padded Hour (1-12) */
  hh: string;
  /** Hour (1-24) */
  k: number;
  /** Padded Hour (1-24) */
  kk: string;
  /** Minute */
  minute: number;
  /** Minute */
  m: number;
  /** Padded Minute */
  mm: string;
  /** Second */
  second: number;
  /** Second */
  s: number;
  /** Padded Second */
  ss: string;
  /** Millisecond */
  milliSecond: number;
  /** Padded Millisecond  (3 degits) */
  SSS: string;
  /** Time Zone */
  Z: string;
  /** Time Zone */
  ZZ: string;
}
export type DateKeys = keyof DateProxy;
export type DateProxyFunction = (date: DateProxy) => any;
