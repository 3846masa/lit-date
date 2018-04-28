import fdate from 'fdate';

const now = new Date();

// Basic
{
  const render = fdate`${'YYYY'}-${'MM'}-${'DD'}T${'HH'}:${'mm'}:${'ss'}.${'SSS'}${'ZZ'}`;
  console.log(render(now));
}

// With function
{
  const monthName = ({ month }) =>
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][month - 1];
  const dayWithSuffix = ({ day }) => {
    if (Math.floor(day / 10) !== 1) {
      switch (day % 10) {
        case 1:
          return `${day}st`;
        case 2:
          return `${day}nd`;
        case 3:
          return `${day}rd`;
      }
    }
    return `${day}th`;
  };
  const render = fdate`${monthName} ${dayWithSuffix}, ${'YYYY'}`;
  console.log(render(now));
}

// Intl
{
  const dayOfWeekName = ({ dayOfWeek }) => ['日', '月', '火', '水', '木', '金', '土'][dayOfWeek];
  const render = fdate`${'M'}月${'D'}日${dayOfWeekName}曜日`;
  console.log(render(now));
}
