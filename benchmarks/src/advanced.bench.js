import moment from 'moment';
import 'moment/locale/ja';
import { DateTime } from 'luxon';
import fecha from 'fecha';
import { format as dateFnsFormat } from 'date-fns';
import dateFnsLocaleJa from 'date-fns/locale/ja';
import dateformat from 'dateformat';
import litdate from 'lit-date';

import createBenchmark from './lib/createBenchmark';

const date = new Date('2000-01-06T12:34:56.789Z');
const expected = '1月6日(木)';

// Prepare
const dayOfWeekToName = ({ dayOfWeek }) => ['日', '月', '火', '水', '木', '金', '土'][dayOfWeek];
Object.assign(dateformat.i18n, {
  dayNames: ['日', '月', '火', '水', '木', '金', '土'],
});
Object.assign(fecha.i18n, {
  dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
});

export default createBenchmark('Advanced usage', {
  moment() {
    const actual = moment(date)
      .locale('ja')
      .format('M月D日(ddd)');
    console.assert(actual === expected);
  },
  luxon() {
    const actual = DateTime.fromJSDate(date)
      .setLocale('ja')
      .toFormat('M月d日(ccc)');
    console.assert(actual === expected);
  },
  fecha() {
    const actual = fecha.format(date, 'M月D日(ddd)');
    console.assert(actual === expected);
  },
  ['date-fns']() {
    const actual = dateFnsFormat(date, 'M月D日(dd)', { locale: dateFnsLocaleJa });
    console.assert(actual === expected);
  },
  dateformat() {
    const actual = dateformat(date, 'm月d日(ddd)');
    console.assert(actual === expected);
  },
  ['lit-date']() {
    const actual = litdate`${'M'}月${'D'}日(${dayOfWeekToName})`(date);
    console.assert(actual === expected);
  },
});
