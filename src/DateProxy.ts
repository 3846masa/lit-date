const pad = (num: number, count: number = 2) => `${num}`.padStart(count, '0');

class DateProxy {
  constructor(private date: Date) {}
  /** Month. */
  get month() {
    return this.date.getMonth() + 1;
  }
  /** Month. */
  get M() {
    return this.month;
  }
  /*+ Padded month */
  get MM() {
    return pad(this.month);
  }
  /** Quarter */
  get quarter() {
    return Math.ceil(this.month / 3);
  }
  /** Quarter */
  get Q() {
    return this.quarter;
  }
  /** Day of month */
  get day() {
    return this.date.getDate();
  }
  /** Day of month */
  get D() {
    return this.day;
  }
  /** Padded day of month */
  get DD() {
    return pad(this.day);
  }
  /** Day of week */
  get dayOfWeek() {
    return this.date.getDay();
  }
  /** Day of week */
  get d() {
    return this.dayOfWeek;
  }
  /** Year */
  get year() {
    return this.date.getFullYear();
  }
  /** Year (2 degits) */
  get YY() {
    return this.year % 100;
  }
  /** Year (4 degits) */
  get YYYY() {
    return this.year;
  }
  /** AM / PM */
  get AM_PM() {
    return this.hour < 12 ? 'AM' : 'PM';
  }
  /** AM / PM */
  get A() {
    return this.AM_PM;
  }
  /** Hour (0-23) */
  get hour() {
    return this.date.getHours();
  }
  /** Hour (0-23) */
  get H() {
    return this.hour;
  }
  /** Padded Hour (0-23) */
  get HH() {
    return pad(this.hour);
  }
  /** Hour (1-12) */
  get h() {
    const hour = this.hour % 12;
    return hour !== 0 ? hour : 12;
  }
  /** Padded Hour (1-12) */
  get hh() {
    return pad(this.h);
  }
  /** Hour (1-24) */
  get k() {
    return this.hour === 0 ? 24 : this.hour;
  }
  /** Padded Hour (1-24) */
  get kk() {
    return pad(this.k);
  }
  /** Minute */
  get minute() {
    return this.date.getMinutes();
  }
  /** Minute */
  get m() {
    return this.minute;
  }
  /** Padded Minute */
  get mm() {
    return pad(this.minute);
  }
  /** Second */
  get second() {
    return this.date.getSeconds();
  }
  /** Second */
  get s() {
    return this.second;
  }
  /** Padded Second */
  get ss() {
    return pad(this.second);
  }
  /** Millisecond */
  get milliSecond() {
    return this.date.getMilliseconds();
  }
  /** Padded Millisecond  (3 degits) */
  get SSS() {
    return pad(this.milliSecond, 3);
  }
  /** Time Zone */
  get Z() {
    const timezone = this.date.getTimezoneOffset();
    if (timezone === 0) {
      return 'Z';
    }
    return [timezone > 0 ? '-' : '+', pad(Math.floor(Math.abs(timezone) / 60)), ':', pad(timezone % 60)].join('');
  }
  /** Time Zone (no colon) */
  get ZZ() {
    const Z = this.Z;
    return Z.length === 1 ? Z : Z.replace(':', '');
  }
}

export default DateProxy;
