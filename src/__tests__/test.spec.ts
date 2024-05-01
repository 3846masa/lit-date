import { afterEach, expect, jest, test } from '@jest/globals';

import type { DateProxy } from '../';
import fdate from '../';

afterEach(() => {
  jest.restoreAllMocks();
});

test('year', () => {
  const date = new Date('2019-05-07T00:00:00.000');
  expect(fdate`${'year'}`(date)).toBe('2019');
  expect(fdate`${'YYYY'}`(date)).toBe('2019');
  expect(fdate`${'YY'}`(date)).toBe('19');
});

test('month', () => {
  const date = new Date('2019-05-07T00:00:00.000');
  expect(fdate`${'month'}`(date)).toBe('5');
  expect(fdate`${'MM'}`(date)).toBe('05');
  expect(fdate`${'M'}`(date)).toBe('5');
});

test('day', () => {
  const date = new Date('2019-05-07T00:00:00.000');
  expect(fdate`${'day'}`(date)).toBe('7');
  expect(fdate`${'DD'}`(date)).toBe('07');
  expect(fdate`${'D'}`(date)).toBe('7');
});

test('quarter', () => {
  expect(fdate`${'quarter'}`(new Date('2019-01-01T00:00:00.000'))).toBe('1');
  expect(fdate`${'quarter'}`(new Date('2019-04-01T00:00:00.000'))).toBe('2');
  expect(fdate`${'quarter'}`(new Date('2019-07-01T00:00:00.000'))).toBe('3');
  expect(fdate`${'quarter'}`(new Date('2019-10-01T00:00:00.000'))).toBe('4');

  expect(fdate`${'Q'}`(new Date('2019-03-01T00:00:00.000'))).toBe('1');
  expect(fdate`${'Q'}`(new Date('2019-05-01T00:00:00.000'))).toBe('2');
  expect(fdate`${'Q'}`(new Date('2019-09-01T00:00:00.000'))).toBe('3');
  expect(fdate`${'Q'}`(new Date('2019-11-01T00:00:00.000'))).toBe('4');
});

test('dayOfWeek', () => {
  expect(fdate`${'dayOfWeek'}`(new Date('2019-01-01T00:00:00.000'))).toBe('2');
  expect(fdate`${'d'}`(new Date('2019-01-06T00:00:00.000'))).toBe('0');
});

test('hour (AM)', () => {
  const date = new Date('2019-05-07T09:00:00.000');
  expect(fdate`${'hour'}`(date)).toBe('9');
  expect(fdate`${'HH'}`(date)).toBe('09');
  expect(fdate`${'H'}`(date)).toBe('9');
  expect(fdate`${'kk'}`(date)).toBe('09');
  expect(fdate`${'k'}`(date)).toBe('9');
  expect(fdate`${'hh'}`(date)).toBe('09');
  expect(fdate`${'h'}`(date)).toBe('9');
});

test('hour (PM)', () => {
  const date = new Date('2019-05-07T21:00:00.000');
  expect(fdate`${'hour'}`(date)).toBe('21');
  expect(fdate`${'HH'}`(date)).toBe('21');
  expect(fdate`${'H'}`(date)).toBe('21');
  expect(fdate`${'kk'}`(date)).toBe('21');
  expect(fdate`${'k'}`(date)).toBe('21');
  expect(fdate`${'hh'}`(date)).toBe('09');
  expect(fdate`${'h'}`(date)).toBe('9');
});

test('hour (00:00)', () => {
  const date = new Date('2019-05-07T00:00:00.000');
  expect(fdate`${'hour'}`(date)).toBe('0');
  expect(fdate`${'HH'}`(date)).toBe('00');
  expect(fdate`${'H'}`(date)).toBe('0');
  expect(fdate`${'kk'}`(date)).toBe('24');
  expect(fdate`${'k'}`(date)).toBe('24');
  expect(fdate`${'hh'}`(date)).toBe('12');
  expect(fdate`${'h'}`(date)).toBe('12');
});

test('AM_PM', () => {
  expect(fdate`${'AM_PM'}`(new Date('2019-05-07T09:00:00.000'))).toBe('AM');
  expect(fdate`${'A'}`(new Date('2019-05-07T15:00:00.000'))).toBe('PM');
});

test('minute', () => {
  const date = new Date('2019-05-07T09:05:00.000');
  expect(fdate`${'minute'}`(date)).toBe('5');
  expect(fdate`${'mm'}`(date)).toBe('05');
  expect(fdate`${'m'}`(date)).toBe('5');
});

test('second', () => {
  const date = new Date('2019-05-07T09:05:08.000');
  expect(fdate`${'second'}`(date)).toBe('8');
  expect(fdate`${'s'}`(date)).toBe('8');
  expect(fdate`${'ss'}`(date)).toBe('08');
});

test('milliSecond', () => {
  const date = new Date('2019-05-07T09:05:08.025');
  expect(fdate`${'milliSecond'}`(date)).toBe('25');
  expect(fdate`${'SSS'}`(date)).toBe('025');
});

test('TimeZone', () => {
  const date = new Date();
  jest.spyOn(Date.prototype, 'getTimezoneOffset').mockReturnValue(-540);
  expect(fdate`${'Z'}`(date)).toBe('+09:00');
  expect(fdate`${'ZZ'}`(date)).toBe('+0900');

  jest.spyOn(Date.prototype, 'getTimezoneOffset').mockReturnValue(+660);
  expect(fdate`${'Z'}`(date)).toBe('-11:00');
  expect(fdate`${'ZZ'}`(date)).toBe('-1100');

  jest.spyOn(Date.prototype, 'getTimezoneOffset').mockReturnValue(0);
  expect(fdate`${'Z'}`(date)).toBe('Z');
  expect(fdate`${'ZZ'}`(date)).toBe('Z');
});

test('i18n', () => {
  const date = new Date('2019-02-25T00:00:00.000');
  const era = ({ year }: DateProxy) => {
    const eraYear = year - 1988;
    return eraYear === 1 ? '平成元年' : `平成${(year - 1988).toString(10)}`;
  };
  const dayOfWeek = ({ dayOfWeek }: DateProxy) => '日月火水木金土'[dayOfWeek];
  expect(fdate`${era}年${'M'}月${'D'}日（${dayOfWeek}）`(date)).toBe('平成31年2月25日（月）');
});
