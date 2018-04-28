import Benchmark from 'benchmark';
import logger from 'beautify-benchmark';

import moment from 'moment';
import { DateTime } from 'luxon';
import fecha from 'fecha';
import { format as dateFnsFormat } from 'date-fns';
import dayjs from 'dayjs';
import dateformat from 'dateformat';
import timeStamp from 'time-stamp';
import fdate from 'fdate';

const suite = new Benchmark.Suite();
const date = new Date('2000-01-06T12:34:56.789Z');
const expected = '2000/01/06';

suite
  .add('moment', () => {
    const actual = moment(date).format('YYYY/MM/DD');
    console.assert(actual === expected);
  })
  .add('luxon', () => {
    const actual = DateTime.fromJSDate(date).toFormat('yyyy/MM/dd');
    console.assert(actual === expected);
  })
  .add('fecha', () => {
    const actual = fecha.format(date, 'YYYY/MM/DD');
    console.assert(actual === expected);
  })
  .add('date-fns', () => {
    const actual = dateFnsFormat(date, 'YYYY/MM/DD');
    console.assert(actual === expected);
  })
  .add('dayjs', () => {
    const actual = dayjs(date).format('YYYY/MM/DD');
    console.assert(actual === expected);
  })
  .add('dateformat', () => {
    const actual = dateformat(date, 'yyyy/mm/dd');
    console.assert(actual === expected);
  })
  .add('time-stamp', () => {
    const actual = timeStamp('YYYY/MM/DD', date);
    console.assert(actual === expected);
  })
  .add('fdate', () => {
    const actual = fdate`${'YYYY'}/${'MM'}/${'DD'}`(date);
    console.assert(actual === expected);
  })
  .on('cycle', (event) => {
    logger.add(event.target);
  })
  .on('complete', () => {
    logger.log();
  })
  .run({ async: true });
