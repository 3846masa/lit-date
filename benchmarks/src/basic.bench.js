import moment from 'moment';
import { DateTime } from 'luxon';
import fecha from 'fecha';
import { format as dateFnsFormat } from 'date-fns';
import dayjs from 'dayjs';
import dateformat from 'dateformat';
import timeStamp from 'time-stamp';
import fdate from 'fdate';

import createBenchmark from './lib/createBenchmark';

const date = new Date('2000-01-06T12:34:56.789Z');
const expected = '2000/01/06';

export default createBenchmark('Basic usage', {
  moment() {
    const actual = moment(date).format('YYYY/MM/DD');
    console.assert(actual === expected);
  },
  luxon() {
    const actual = DateTime.fromJSDate(date).toFormat('yyyy/MM/dd');
    console.assert(actual === expected);
  },
  fecha() {
    const actual = fecha.format(date, 'YYYY/MM/DD');
    console.assert(actual === expected);
  },
  ['date-fns']() {
    const actual = dateFnsFormat(date, 'YYYY/MM/DD');
    console.assert(actual === expected);
  },
  dayjs() {
    const actual = dayjs(date).format('YYYY/MM/DD');
    console.assert(actual === expected);
  },
  dateformat() {
    const actual = dateformat(date, 'yyyy/mm/dd');
    console.assert(actual === expected);
  },
  ['time-stamp']() {
    const actual = timeStamp('YYYY/MM/DD', date);
    console.assert(actual === expected);
  },
  fdate() {
    const actual = fdate`${'YYYY'}/${'MM'}/${'DD'}`(date);
    console.assert(actual === expected);
  },
});
