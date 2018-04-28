import { DateKeys, DateProxy } from './types';

const pad = (num: number, count: number = 2) => `${num}`.padStart(count, '0');

const proxyFunctions: Record<DateKeys, (this: DateProxy, date: Date) => any> = {
  month(date) {
    return date.getMonth() + 1;
  },
  M() {
    return this.month;
  },
  MM() {
    return pad(this.month);
  },
  quarter(date) {
    return Math.floor(date.getMonth() / 3);
  },
  Q() {
    return this.quarter;
  },
  day(date) {
    return date.getDate();
  },
  D() {
    return this.day;
  },
  DD() {
    return pad(this.day);
  },
  dayOfWeek(date) {
    return date.getDay();
  },
  d() {
    return this.dayOfWeek;
  },
  year(date) {
    return date.getFullYear();
  },
  YY() {
    return this.year % 100;
  },
  YYYY() {
    return this.year;
  },
  AM_PM() {
    return this.hour < 12 ? 'AM' : 'PM';
  },
  A() {
    return this.AM_PM;
  },
  hour(date) {
    return date.getHours();
  },
  H() {
    return this.hour;
  },
  HH() {
    return pad(this.hour);
  },
  h() {
    return this.hour % 12 + 1;
  },
  hh() {
    return pad(this.h);
  },
  k() {
    return this.hour + 1;
  },
  kk() {
    return pad(this.k);
  },
  minute(date) {
    return date.getMinutes();
  },
  m() {
    return this.minute;
  },
  mm() {
    return pad(this.minute);
  },
  second(date) {
    return date.getSeconds();
  },
  s() {
    return this.second;
  },
  ss() {
    return pad(this.second);
  },
  milliSecond(date) {
    return date.getMilliseconds();
  },
  SSS() {
    return pad(this.milliSecond, 3);
  },
  Z(date) {
    const timezone = date.getTimezoneOffset();
    if (timezone === 0) {
      return 'Z';
    }
    return [timezone > 0 ? '-' : '+', pad(Math.floor(Math.abs(timezone) / 60)), ':', pad(timezone % 60)].join('');
  },
  ZZ() {
    const Z = this.Z;
    return Z.length === 1 ? Z : Z.replace(':', '');
  },
};

const proxyFunctionKeys = new Set(Object.keys(proxyFunctions));

export default Object.create(proxyFunctions);
export { proxyFunctionKeys };
