# ⏰ lit-date

[![NPM](https://nodei.co/npm/lit-date.png?mini=true)](https://nodei.co/npm/lit-date/)
![filesize](https://img.badgesize.io/https://unpkg.com/lit-date.svg?compression=gzip&style=flat-square)
[![codecov](https://flat.badgen.net/codecov/c/github/3846masa/lit-date)](https://codecov.io/gh/3846masa/lit-date)

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

[time-stamp_size]: https://flat.badgen.net/bundlephobia/min/time-stamp?label=size
[lit-date_size]: https://flat.badgen.net/bundlephobia/min/lit-date?label=size
[dateformat_size]: https://flat.badgen.net/bundlephobia/min/dateformat?label=size
[fecha_size]: https://flat.badgen.net/bundlephobia/min/fecha?label=size
[dayjs_size]: https://flat.badgen.net/bundlephobia/min/dayjs?label=size
[date-fns_size]: https://flat.badgen.net/bundlephobia/min/date-fns?label=size
[moment_size]: https://flat.badgen.net/bundlephobia/min/moment?label=size
[luxon_size]: https://flat.badgen.net/bundlephobia/min/luxon?label=size
[tinytime_size]: https://flat.badgen.net/bundlephobia/min/tinytime?label=size
[tinydate_size]: https://flat.badgen.net/bundlephobia/min/tinydate?label=size
[date-format_size]: https://flat.badgen.net/bundlephobia/min/date-format?label=size
[formatoid_size]: https://flat.badgen.net/bundlephobia/min/formatoid?label=size
[time-stamp_gzip]: https://flat.badgen.net/bundlephobia/minzip/time-stamp?label=gzip&color=green
[lit-date_gzip]: https://flat.badgen.net/bundlephobia/minzip/lit-date?label=gzip&color=green
[dateformat_gzip]: https://flat.badgen.net/bundlephobia/minzip/dateformat?label=gzip&color=green
[fecha_gzip]: https://flat.badgen.net/bundlephobia/minzip/fecha?label=gzip&color=green
[dayjs_gzip]: https://flat.badgen.net/bundlephobia/minzip/dayjs?label=gzip&color=green
[date-fns_gzip]: https://flat.badgen.net/bundlephobia/minzip/date-fns?label=gzip&color=green
[moment_gzip]: https://flat.badgen.net/bundlephobia/minzip/moment?label=gzip&color=green
[luxon_gzip]: https://flat.badgen.net/bundlephobia/minzip/luxon?label=gzip&color=green
[tinytime_gzip]: https://flat.badgen.net/bundlephobia/minzip/tinytime?label=gzip&color=green
[tinydate_gzip]: https://flat.badgen.net/bundlephobia/minzip/tinydate?label=gzip&color=green
[date-format_gzip]: https://flat.badgen.net/bundlephobia/minzip/date-format?label=gzip&color=green
[formatoid_gzip]: https://flat.badgen.net/bundlephobia/minzip/formatoid?label=gzip&color=green

## Contribute

PRs accepted.

## License

[MIT (c) 3846masa](https://github.com/3846masa/lit-date/blob/master/LICENSE)
