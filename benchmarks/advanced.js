import Benchmark from 'benchmark';
import logger from 'beautify-benchmark';

import moment from 'moment';
import 'moment/locale/ja';
import { DateTime } from 'luxon';
import fecha from 'fecha';
import { format as dateFnsFormat } from 'date-fns';
import dateFnsLocaleJa from 'date-fns/locale/ja';
import dateformat from 'dateformat';
import fdate from 'fdate';

const suite = new Benchmark.Suite();
const date = new Date('2000-01-06T12:34:56.789Z');
const expected = '1月6日(木)';

// Prepare
const dayOfWeekToName = ({ dayOfWeek }) => ['日', '月', '火', '水', '木', '金', '土'][dayOfWeek];
dateformat.i18n = {
  ...dateformat.i18n,
  dayNames: ['日', '月', '火', '水', '木', '金', '土'],
};
fecha.i18n = {
  ...fecha.i18n,
  dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
};

suite
  .add('moment', () => {
    const actual = moment(date)
      .locale('ja')
      .format('M月D日(ddd)');
    console.assert(actual === expected);
  })
  .add('luxon', () => {
    const actual = DateTime.fromJSDate(date)
      .setLocale('ja')
      .toFormat('M月d日(ccc)');
    console.assert(actual === expected);
  })
  .add('fecha', () => {
    const actual = fecha.format(date, 'M月D日(ddd)');
    console.assert(actual === expected);
  })
  .add('date-fns', () => {
    const actual = dateFnsFormat(date, 'M月D日(dd)', { locale: dateFnsLocaleJa });
    console.assert(actual === expected);
  })
  .add('dateformat', () => {
    const actual = dateformat(date, 'm月d日(ddd)');
    console.assert(actual === expected);
  })
  .add('fdate', () => {
    const actual = fdate`${'M'}月${'D'}日(${dayOfWeekToName})`(date);
    console.assert(actual === expected);
  })
  .on('cycle', (event) => {
    logger.add(event.target);
  })
  .on('complete', function() {
    logger.log();
  })
  .run({ async: true });
