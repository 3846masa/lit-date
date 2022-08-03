import test from 'ava';

import fdate, { DateProxy } from '../src';

test('year', (t) => {
  const date = new Date('2019-05-07T00:00:00.000');
  t.is(fdate`${'year'}`(date), '2019');
  t.is(fdate`${'YYYY'}`(date), '2019');
  t.is(fdate`${'YY'}`(date), '19');
});

test('month', (t) => {
  const date = new Date('2019-05-07T00:00:00.000');
  t.is(fdate`${'month'}`(date), '5');
  t.is(fdate`${'MM'}`(date), '05');
  t.is(fdate`${'M'}`(date), '5');
});

test('day', (t) => {
  const date = new Date('2019-05-07T00:00:00.000');
  t.is(fdate`${'day'}`(date), '7');
  t.is(fdate`${'DD'}`(date), '07');
  t.is(fdate`${'D'}`(date), '7');
});

test('quarter', (t) => {
  t.is(fdate`${'quarter'}`(new Date('2019-01-01T00:00:00.000')), '1');
  t.is(fdate`${'quarter'}`(new Date('2019-04-01T00:00:00.000')), '2');
  t.is(fdate`${'quarter'}`(new Date('2019-07-01T00:00:00.000')), '3');
  t.is(fdate`${'quarter'}`(new Date('2019-10-01T00:00:00.000')), '4');

  t.is(fdate`${'Q'}`(new Date('2019-03-01T00:00:00.000')), '1');
  t.is(fdate`${'Q'}`(new Date('2019-05-01T00:00:00.000')), '2');
  t.is(fdate`${'Q'}`(new Date('2019-09-01T00:00:00.000')), '3');
  t.is(fdate`${'Q'}`(new Date('2019-11-01T00:00:00.000')), '4');
});

test('dayOfWeek', (t) => {
  t.is(fdate`${'dayOfWeek'}`(new Date('2019-01-01T00:00:00.000')), '2');
  t.is(fdate`${'d'}`(new Date('2019-01-06T00:00:00.000')), '0');
});

test('hour (AM)', (t) => {
  const date = new Date('2019-05-07T09:00:00.000');
  t.is(fdate`${'hour'}`(date), '9');
  t.is(fdate`${'HH'}`(date), '09');
  t.is(fdate`${'H'}`(date), '9');
  t.is(fdate`${'kk'}`(date), '09');
  t.is(fdate`${'k'}`(date), '9');
  t.is(fdate`${'hh'}`(date), '09');
  t.is(fdate`${'h'}`(date), '9');
});

test('hour (PM)', (t) => {
  const date = new Date('2019-05-07T21:00:00.000');
  t.is(fdate`${'hour'}`(date), '21');
  t.is(fdate`${'HH'}`(date), '21');
  t.is(fdate`${'H'}`(date), '21');
  t.is(fdate`${'kk'}`(date), '21');
  t.is(fdate`${'k'}`(date), '21');
  t.is(fdate`${'hh'}`(date), '09');
  t.is(fdate`${'h'}`(date), '9');
});

test('hour (00:00)', (t) => {
  const date = new Date('2019-05-07T00:00:00.000');
  t.is(fdate`${'hour'}`(date), '0');
  t.is(fdate`${'HH'}`(date), '00');
  t.is(fdate`${'H'}`(date), '0');
  t.is(fdate`${'kk'}`(date), '24');
  t.is(fdate`${'k'}`(date), '24');
  t.is(fdate`${'hh'}`(date), '12');
  t.is(fdate`${'h'}`(date), '12');
});

test('AM_PM', (t) => {
  t.is(fdate`${'AM_PM'}`(new Date('2019-05-07T09:00:00.000')), 'AM');
  t.is(fdate`${'A'}`(new Date('2019-05-07T15:00:00.000')), 'PM');
});

test('minute', (t) => {
  const date = new Date('2019-05-07T09:05:00.000');
  t.is(fdate`${'minute'}`(date), '5');
  t.is(fdate`${'mm'}`(date), '05');
  t.is(fdate`${'m'}`(date), '5');
});

test('second', (t) => {
  const date = new Date('2019-05-07T09:05:08.000');
  t.is(fdate`${'second'}`(date), '8');
  t.is(fdate`${'s'}`(date), '8');
  t.is(fdate`${'ss'}`(date), '08');
});

test('milliSecond', (t) => {
  const date = new Date('2019-05-07T09:05:08.025');
  t.is(fdate`${'milliSecond'}`(date), '25');
  t.is(fdate`${'SSS'}`(date), '025');
});

test('TimeZone', (t) => {
  const date = new Date();
  date.getTimezoneOffset = () => -540;
  t.is(fdate`${'Z'}`(date), '+09:00');
  t.is(fdate`${'ZZ'}`(date), '+0900');

  date.getTimezoneOffset = () => +660;
  t.is(fdate`${'Z'}`(date), '-11:00');
  t.is(fdate`${'ZZ'}`(date), '-1100');

  date.getTimezoneOffset = () => 0;
  t.is(fdate`${'Z'}`(date), 'Z');
  t.is(fdate`${'ZZ'}`(date), 'Z');
});

test('i18n', (t) => {
  const date = new Date('2019-02-25T00:00:00.000');
  const era = ({ year }: DateProxy) => {
    const eraYear = year - 1988;
    return eraYear === 1 ? '平成元年' : `平成${year - 1988}`;
  };
  const dayOfWeek = ({ dayOfWeek }: DateProxy) => '日月火水木金土'[dayOfWeek];
  t.is(fdate`${era}年${'M'}月${'D'}日（${dayOfWeek}）`(date), '平成31年2月25日（月）');
});
