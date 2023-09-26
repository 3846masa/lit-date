/* global suite, benchmark */
import 'moment/locale/ja';
import 'dayjs/locale/ja';

import { cdate } from 'cdate';
import { format as dateFnsFormat } from 'date-fns';
import { ja as dateFnsLocaleJa } from 'date-fns/locale';
import dateformat, { i18n as dateformatI18n } from 'dateformat';
import dayjs from 'dayjs';
import fecha from 'fecha';
import litdate from 'lit-date';
import { DateTime } from 'luxon';
import moment from 'moment';

const date = new Date('2000-01-06T12:34:56.789Z');
const expected = '1月6日(木)';

// Prepare
const dayOfWeekToName = ({ dayOfWeek }) => ['日', '月', '火', '水', '木', '金', '土'][dayOfWeek];
Object.assign(dateformatI18n, {
  dayNames: ['日', '月', '火', '水', '木', '金', '土'],
});
fecha.setGlobalDateI18n({
  dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
});
const cdateJa = cdate()
  .handler({
    ddd: (dt) => ['日', '月', '火', '水', '木', '金', '土'][dt.getDay()] || '',
  })
  .cdateFn();

function assert(actual, expected) {
  if (actual !== expected) {
    throw new Error(`${actual} !== ${expected}`);
  }
}

suite('Advanced usage', () => {
  benchmark('moment', () => {
    const actual = moment(date).locale('ja').format('M月D日(ddd)');
    assert(actual, expected);
  });
  benchmark('luxon', () => {
    const actual = DateTime.fromJSDate(date).setLocale('ja').toFormat('M月d日(ccc)');
    assert(actual, expected);
  });
  benchmark('fecha', () => {
    const actual = fecha.format(date, 'M月D日(ddd)');
    assert(actual, expected);
  });
  benchmark('date-fns', () => {
    const actual = dateFnsFormat(date, 'M月d日(eee)', { locale: dateFnsLocaleJa });
    assert(actual, expected);
  });
  benchmark('dateformat', () => {
    const actual = dateformat(date, 'm月d日(ddd)');
    assert(actual, expected);
  });
  benchmark('cdate', () => {
    const actual = cdateJa(date).format('M月D日(ddd)');
    assert(actual, expected);
  });
  benchmark('dayjs', () => {
    const actual = dayjs(date).locale('ja').format('M月D日(ddd)');
    assert(actual, expected);
  });
  benchmark('lit-date', () => {
    const actual = litdate`${'M'}月${'D'}日(${dayOfWeekToName})`(date);
    assert(actual, expected);
  });
});
