import litdate from 'lit-date';

const now = new Date();

// Basic
{
  const format = litdate`${'YYYY'}-${'MM'}-${'DD'}T${'HH'}:${'mm'}:${'ss'}.${'SSS'}${'ZZ'}`;
  console.log(format(now));
}

// With function
{
  /** @param {import('lit-date').DateProxy} param */
  const monthName = ({ month }) =>
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][month - 1];
  /** @param {import('lit-date').DateProxy} param */
  const dayWithSuffix = ({ day }) => {
    if (Math.floor(day / 10) !== 1) {
      switch (day % 10) {
        case 1:
          return `${day.toString(10)}st`;
        case 2:
          return `${day.toString(10)}nd`;
        case 3:
          return `${day.toString(10)}rd`;
      }
    }
    return `${day.toString(10)}th`;
  };
  const format = litdate`${monthName} ${dayWithSuffix}, ${'YYYY'}`;
  console.log(format(now));
}

// Intl
{
  /** @param {import('lit-date').DateProxy} param */
  const dayOfWeekName = ({ dayOfWeek }) => ['日', '月', '火', '水', '木', '金', '土'][dayOfWeek];
  const format = litdate`${'M'}月${'D'}日${dayOfWeekName}曜日`;
  console.log(format(now));
}
