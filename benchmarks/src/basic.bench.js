import moment from 'moment';
import { DateTime } from 'luxon';
import fecha from 'fecha';
import { format as dateFnsFormat } from 'date-fns';
import dayjs from 'dayjs';
import dateformat from 'dateformat';
import timeStamp from 'time-stamp';
import litdate from 'lit-date';

const date = new Date('2000-01-06T12:34:56.789Z');
const expected = '2000/01/06';

suite('Basic usage', () => {
  benchmark('moment', () => {
    const actual = moment(date).format('YYYY/MM/DD');
    console.assert(actual === expected);
  });
  benchmark('luxon', () => {
    const actual = DateTime.fromJSDate(date).toFormat('yyyy/MM/dd');
    console.assert(actual === expected);
  });
  benchmark('fecha', () => {
    const actual = fecha.format(date, 'YYYY/MM/DD');
    console.assert(actual === expected);
  });
  benchmark('date-fns', () => {
    const actual = dateFnsFormat(date, 'YYYY/MM/DD');
    console.assert(actual === expected);
  });
  benchmark('dayjs', () => {
    const actual = dayjs(date).format('YYYY/MM/DD');
    console.assert(actual === expected);
  });
  benchmark('dateformat', () => {
    const actual = dateformat(date, 'yyyy/mm/dd');
    console.assert(actual === expected);
  });
  benchmark('time-stamp', () => {
    const actual = timeStamp('YYYY/MM/DD', date);
    console.assert(actual === expected);
  });
  benchmark('lit-date', () => {
    const actual = litdate`${'YYYY'}/${'MM'}/${'DD'}`(date);
    console.assert(actual === expected);
  });
});
