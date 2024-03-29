/* global suite, benchmark */
import { cdate } from 'cdate';
import { format as dateFnsFormat } from 'date-fns';
import dateFormat2 from 'date-format';
import dateformat from 'dateformat';
import dayjs from 'dayjs';
import fecha from 'fecha';
import formatoid from 'formatoid';
import litdate from 'lit-date';
import { DateTime } from 'luxon';
import moment from 'moment';
import timeStamp from 'time-stamp';
import tinydate from 'tinydate';
import tinytime from 'tinytime';

const date = new Date('2000-01-06T12:34:56.789Z');
const expected = '2000/01/06';

function assert(actual, expected) {
  if (actual !== expected) {
    throw new Error(`${actual} !== ${expected}`);
  }
}

suite('Basic usage', () => {
  benchmark('moment', () => {
    const actual = moment(date).format('YYYY/MM/DD');
    assert(actual, expected);
  });
  benchmark('luxon', () => {
    const actual = DateTime.fromJSDate(date).toFormat('yyyy/MM/dd');
    assert(actual, expected);
  });
  benchmark('fecha', () => {
    const actual = fecha.format(date, 'YYYY/MM/DD');
    assert(actual, expected);
  });
  benchmark('date-fns', () => {
    const actual = dateFnsFormat(date, 'yyyy/MM/dd');
    assert(actual, expected);
  });
  benchmark('dayjs', () => {
    const actual = dayjs(date).format('YYYY/MM/DD');
    assert(actual, expected);
  });
  benchmark('dateformat', () => {
    const actual = dateformat(date, 'yyyy/mm/dd');
    assert(actual, expected);
  });
  benchmark('date-format', () => {
    const actual = dateFormat2.asString('yyyy/MM/dd', date);
    assert(actual, expected);
  });
  benchmark('time-stamp', () => {
    const actual = timeStamp('YYYY/MM/DD', date);
    assert(actual, expected);
  });
  benchmark('tinytime', () => {
    const actual = tinytime('{YYYY}/{Mo}/{DD}', { padDays: true, padMonth: true }).render(date);
    assert(actual, expected);
  });
  benchmark('tinydate', () => {
    const actual = tinydate('{YYYY}/{MM}/{DD}')(date);
    assert(actual, expected);
  });
  benchmark('formatoid', () => {
    const actual = formatoid(date, 'YYYY/MM/DD');
    assert(actual, expected);
  });
  benchmark('cdate', () => {
    const actual = cdate(date).format('YYYY/MM/DD');
    assert(actual, expected);
  });
  benchmark('lit-date', () => {
    const actual = litdate`${'YYYY'}/${'MM'}/${'DD'}`(date);
    assert(actual, expected);
  });
});
