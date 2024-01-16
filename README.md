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

See [examples](https://github.com/3846masa/lit-date/tree/main/examples).

## Benchmark

See [benchmarks](https://github.com/3846masa/lit-date/tree/main/benchmarks) for more details.

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

|              |                size |                gzip |
| :----------- | ------------------: | ------------------: |
| tinydate     |    ![tinydate_size] |    ![tinydate_gzip] |
| time-stamp   |  ![time-stamp_size] |  ![time-stamp_gzip] |
| **lit-date** |    ![lit-date_size] |    ![lit-date_gzip] |
| tinytime     |    ![tinytime_size] |    ![tinytime_gzip] |
| date-format  | ![date-format_size] | ![date-format_gzip] |
| dateformat   |  ![dateformat_size] |  ![dateformat_gzip] |
| formatoid    |   ![formatoid_size] |   ![formatoid_gzip] |
| fecha        |       ![fecha_size] |       ![fecha_gzip] |
| dayjs        |       ![dayjs_size] |       ![dayjs_gzip] |
| date-fns     |    ![date-fns_size] |    ![date-fns_gzip] |
| luxon        |       ![luxon_size] |       ![luxon_gzip] |
| moment       |      ![moment_size] |      ![moment_gzip] |

[time-stamp_size]: https://img.shields.io/bundlephobia/min/time-stamp?label=size&style=flat-square
[lit-date_size]: https://img.shields.io/bundlephobia/min/lit-date?label=size&style=flat-square
[dateformat_size]: https://img.shields.io/bundlephobia/min/dateformat?label=size&style=flat-square
[fecha_size]: https://img.shields.io/bundlephobia/min/fecha?label=size&style=flat-square
[dayjs_size]: https://img.shields.io/bundlephobia/min/dayjs?label=size&style=flat-square
[date-fns_size]: https://img.shields.io/bundlephobia/min/date-fns?label=size&style=flat-square
[moment_size]: https://img.shields.io/bundlephobia/min/moment?label=size&style=flat-square
[luxon_size]: https://img.shields.io/bundlephobia/min/luxon?label=size&style=flat-square
[tinytime_size]: https://img.shields.io/bundlephobia/min/tinytime?label=size&style=flat-square
[tinydate_size]: https://img.shields.io/bundlephobia/min/tinydate?label=size&style=flat-square
[date-format_size]: https://img.shields.io/bundlephobia/min/date-format?label=size&style=flat-square
[formatoid_size]: https://img.shields.io/bundlephobia/min/formatoid?label=size&style=flat-square
[time-stamp_gzip]: https://img.shields.io/bundlephobia/minzip/time-stamp?label=gzip&color=brightgreen&style=flat-square
[lit-date_gzip]: https://img.shields.io/bundlephobia/minzip/lit-date?label=gzip&color=brightgreen&style=flat-square
[dateformat_gzip]: https://img.shields.io/bundlephobia/minzip/dateformat?label=gzip&color=brightgreen&style=flat-square
[fecha_gzip]: https://img.shields.io/bundlephobia/minzip/fecha?label=gzip&color=brightgreen&style=flat-square
[dayjs_gzip]: https://img.shields.io/bundlephobia/minzip/dayjs?label=gzip&color=brightgreen&style=flat-square
[date-fns_gzip]: https://img.shields.io/bundlephobia/minzip/date-fns?label=gzip&color=brightgreen&style=flat-square
[moment_gzip]: https://img.shields.io/bundlephobia/minzip/moment?label=gzip&color=brightgreen&style=flat-square
[luxon_gzip]: https://img.shields.io/bundlephobia/minzip/luxon?label=gzip&color=brightgreen&style=flat-square
[tinytime_gzip]: https://img.shields.io/bundlephobia/minzip/tinytime?label=gzip&color=brightgreen&style=flat-square
[tinydate_gzip]: https://img.shields.io/bundlephobia/minzip/tinydate?label=gzip&color=brightgreen&style=flat-square
[date-format_gzip]: https://img.shields.io/bundlephobia/minzip/date-format?label=gzip&color=brightgreen&style=flat-square
[formatoid_gzip]: https://img.shields.io/bundlephobia/minzip/formatoid?label=gzip&color=brightgreen&style=flat-square

## Contribute

PRs accepted.

## License

[MIT (c) 3846masa](https://github.com/3846masa/lit-date/blob/main/LICENSE)
