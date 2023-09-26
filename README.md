# ⏰ lit-date

[![NPM](https://img.shields.io/npm/v/lit-date?style=flat-square)](https://www.npmjs.com/package/lit-date)
![filesize](https://img.shields.io/bundlephobia/minzip/lit-date?label=gzip&color=brightgreen&style=flat-square)
[![codecov](https://img.shields.io/codecov/c/github/3846masa/lit-date?style=flat-square)](https://codecov.io/gh/3846masa/lit-date)

> Light-weight, faster datetime formatter for modern browsers.

`lit-date` is ...

- ⏰ Formatter for **Date** object
- 👼 Light-weight (**~1kB** gzipped!)
- 🦄 Very faster than other datetime libraries (e.g. `moment`)
- 🆕 Powered by `Template literals`

## Install

### Node.js

```bash
npm i --save lit-date
# -- OR --
yarn add lit-date
```

### Browser

```html
<script src="https://unpkg.com/lit-date"></script>
```

```html
<script type="module">
  import litdate from 'https://unpkg.com/lit-date?module';
</script>
```

## Usage

```js
const text = litdate`${'YYYY'}/${'MM'}/${'DD'}`(new Date());
console.log(text);
```

```js
// i18n
const dayOfWeek = ({ dayOfWeek }) => [...'日月火水木金土'][dayOfWeek];
const format = litdate`${'M'}月${'D'}日${dayOfWeek}曜日`;
console.log(format(new Date()));
```

See [examples](https://github.com/3846masa/lit-date/tree/master/examples).

## Benchmark

See [benchmarks](https://github.com/3846masa/lit-date/tree/master/benchmarks) for more details.

### Basic usage

- `new Date()` -> `2000/01/06`

|         Chrome          |         Firefox          |
| :---------------------: | :----------------------: |
| ![Basic usage / Chrome] | ![Basic usage / Firefox] |

[basic usage / chrome]: https://plot.ly/~3846masa/10.png?width=700&height=700
[basic usage / firefox]: https://plot.ly/~3846masa/4.png?width=700&height=700

### Advanced usage

- `new Date()` -> `1月6日(木)`

|           Chrome           |           Firefox           |
| :------------------------: | :-------------------------: |
| ![Advanced usage / Chrome] | ![Advanced usage / Firefox] |

[advanced usage / chrome]: https://plot.ly/~3846masa/6.png?width=700&height=700
[advanced usage / firefox]: https://plot.ly/~3846masa/7.png?width=700&height=700

### Bundle size

|                 | size                |
| :-------------- | :------------------ |
| tinydate        | ![tinydate_size]    |
| time-stamp      | ![time-stamp_size]  |
| tinytime        | ![tinytime_size]    |
| **lit-date** ✅ | ![lit-date_size]    |
| date-format     | ![date-format_size] |
| dateformat      | ![dateformat_size]  |
| formatoid       | ![formatoid_size]   |
| fecha           | ![fecha_size]       |
| dayjs           | ![dayjs_size]       |
| cdate           | ![cdate_size]       |
| date-fns/format | ![date-fns_size]    |
| luxon           | ![luxon_size]       |
| moment          | ![moment_size]      |

[time-stamp_size]: https://deno.bundlejs.com/?q=time-stamp&badge=detailed&badge-style=flat-square
[lit-date_size]: https://deno.bundlejs.com/?q=lit-date&badge=detailed&badge-style=flat-square
[dateformat_size]: https://deno.bundlejs.com/?q=dateformat&badge=detailed&badge-style=flat-square
[fecha_size]: https://deno.bundlejs.com/?q=fecha&badge=detailed&badge-style=flat-square
[dayjs_size]: https://deno.bundlejs.com/?q=dayjs&badge=detailed&badge-style=flat-square
[date-fns_size]: https://deno.bundlejs.com/?q=date-fns&treeshake=%5B%7Bformat%7D%5D&badge=detailed&badge-style=flat-square
[moment_size]: https://deno.bundlejs.com/?q=moment&badge=detailed&badge-style=flat-square
[luxon_size]: https://deno.bundlejs.com/?q=luxon&badge=detailed&badge-style=flat-square
[tinytime_size]: https://deno.bundlejs.com/?q=tinytime&badge=detailed&badge-style=flat-square
[tinydate_size]: https://deno.bundlejs.com/?q=tinydate&badge=detailed&badge-style=flat-square
[date-format_size]: https://deno.bundlejs.com/?q=date-format&badge=detailed&badge-style=flat-square
[formatoid_size]: https://deno.bundlejs.com/?q=formatoid&badge=detailed&badge-style=flat-square
[cdate_size]: https://deno.bundlejs.com/?q=cdate&badge=detailed&badge-style=flat-square

## Contribute

PRs accepted.

## License

[MIT (c) 3846masa](https://github.com/3846masa/lit-date/blob/master/LICENSE)
