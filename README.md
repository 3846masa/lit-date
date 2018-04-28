# ⏰ fdate

[![NPM](https://nodei.co/npm/fdate.png?compact=true)](https://nodei.co/npm/fdate/)

> Light-weight, faster datetime formatter for modern browsers.

`fdate` is ...

- ⏰ **f**ormatter of **Date**
- 👼 light-weight as a **f**eather (**~ 1kB** gzipped!)
- 🦄 **~ x1.5** **f**aster than `moment`
- 🆕 powered by `Proxy` and `Template literals`

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Benchmark](#benchmark)
- [Contribute](#contribute)
- [License](#license)

## Install

```bash
npm i --save fdate
# -- OR --
yarn add fdate
```

**-- OR --**

```html
<script src="https://unpkg.com/fdate"></script>
```

## Usage

```js
import fdate from 'fdate';
const render = fdate`${'YYYY'}/${'MM'}/${'DD'}`;
console.log(render(new Date()));
```

```js
// i18n
const dayOfWeekName = ({ d }) => [...'日月火水木金土'][d];
const render = fdate`${'M'}月${'D'}日${dayOfWeekName}曜日`;
console.log(render(new Date()));
```

See [examples](./examples).

## Benchmark

See [benchmarks](./benchmarks) for more details.

### Speed

- Machine: `Windows 10 Education x64, Core i7-6700HQ, Memory 16GB`
- Node: `v9.11.1`

#### Basic
`new Date()` -> `2000/01/06`

```
dateformat x 123,624 ops/sec ±0.73% (91 runs sampled)
luxon      x 202,952 ops/sec ±0.90% (92 runs sampled)
fecha      x 221,008 ops/sec ±0.72% (91 runs sampled)
dayjs      x 317,960 ops/sec ±0.93% (82 runs sampled)
moment     x 407,424 ops/sec ±0.89% (85 runs sampled)
time-stamp x 430,194 ops/sec ±0.80% (89 runs sampled)
date-fns   x 430,681 ops/sec ±0.85% (87 runs sampled)
fdate      x 614,498 ops/sec ±0.77% (89 runs sampled)

Fastest is fdate
```

#### Advanced
`new Date()` -> `1月6日(木)` (written in Japanese)

```
luxon      x     566 ops/sec ±0.72% (87 runs sampled)
dateformat x 119,879 ops/sec ±0.61% (93 runs sampled)
date-fns   x 121,835 ops/sec ±2.75% (86 runs sampled)
fecha      x 222,093 ops/sec ±0.68% (92 runs sampled)
moment     x 468,912 ops/sec ±1.31% (89 runs sampled)
fdate      x 540,576 ops/sec ±1.35% (90 runs sampled)

Fastest is fdate
```

### Bundle size

See [benchmarks/scripts](./benchmarks/scripts).

```
moment     | 52,945 bytes (gzip: 17,302 bytes)
luxon      | 52,645 bytes (gzip: 15,384 bytes)
date-fns   |  9,215 bytes (gzip:  3,289 bytes)
dayjs      |  6,152 bytes (gzip:  2,203 bytes)
fecha      |  4,913 bytes (gzip:  1,963 bytes)
dateformat |  3,096 bytes (gzip:  1,550 bytes)
fdate      |  1,462 bytes (gzip:    680 bytes)
time-stamp |    516 bytes (gzip:    347 bytes)
```

## Contribute

PRs accepted.

## License

[MIT (c) 3846masa](./LICENSE)
