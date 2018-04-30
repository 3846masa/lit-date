# ⏰ fdate

[![NPM](https://nodei.co/npm/fdate.png?compact=true)](https://nodei.co/npm/fdate/)

> Light-weight, faster datetime formatter for modern browsers.

`fdate` is ...

- ⏰ **f**ormatter of **Date**
- 👼 light-weight (**~1kB** gzipped!)
- 🦄 fast like other datetime libraries (under V8 engine)
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

### Basic usage

- `new Date()` -> `2000/01/06`

#### Node.js v9.11.1

|            | ops/sec             |        |                   |
| :--------- | ------------------: | -----: | ----------------: |
| **fdate**  | **555,012 ops/sec** | ±1.46% | (91 runs sampled) |
| time-stamp | 387,908 ops/sec     | ±1.45% | (85 runs sampled) |
| moment     | 371,611 ops/sec     | ±1.73% | (84 runs sampled) |
| date-fns   | 363,545 ops/sec     | ±2.03% | (85 runs sampled) |
| dayjs      | 267,914 ops/sec     | ±1.49% | (82 runs sampled) |
| fecha      | 188,312 ops/sec     | ±1.39% | (89 runs sampled) |
| dateformat | 102,990 ops/sec     | ±3.18% | (83 runs sampled) |
| luxon      | 2,300 ops/sec       | ±1.58% | (85 runs sampled) |

#### Chrome 66.0.3359 (Windows 10 0.0.0)

|            | ops/sec             |        |                   |
| :--------- | ------------------: | -----: | ----------------: |
| time-stamp | 599,766 ops/sec     | ±0.76% | (64 runs sampled) |
| **fdate**  | **518,779 ops/sec** | ±1.19% | (61 runs sampled) |
| moment     | 494,608 ops/sec     | ±0.71% | (63 runs sampled) |
| fecha      | 487,890 ops/sec     | ±1.19% | (64 runs sampled) |
| date-fns   | 474,755 ops/sec     | ±1.12% | (62 runs sampled) |
| dayjs      | 271,477 ops/sec     | ±1.35% | (60 runs sampled) |
| dateformat | 141,005 ops/sec     | ±1.15% | (61 runs sampled) |
| luxon      | 2,433 ops/sec       | ±2.46% | (59 runs sampled) |

#### Firefox 59.0.0 (Windows 10 0.0.0)

|            | ops/sec             |        |                   |
| :--------- | ------------------: | -----: | ----------------: |
| fecha      | 838,066 ops/sec     | ±3.73% | (45 runs sampled) |
| time-stamp | 508,171 ops/sec     | ±2.72% | (46 runs sampled) |
| date-fns   | 452,750 ops/sec     | ±2.90% | (47 runs sampled) |
| moment     | 436,953 ops/sec     | ±1.96% | (48 runs sampled) |
| dayjs      | 253,912 ops/sec     | ±2.91% | (47 runs sampled) |
| **fdate**  | **190,718 ops/sec** | ±4.33% | (42 runs sampled) |
| dateformat | 55,879 ops/sec      | ±2.32% | (49 runs sampled) |
| luxon      | 2,609 ops/sec       | ±1.34% | (48 runs sampled) |

### Advanced usage

- `new Date()` -> `1月6日(木)` (written in Japanese)

#### Node.js v9.11.1

|            | ops/sec             |        |                   |
| :--------- | ------------------: | -----: | ----------------: |
| **fdate**  | **487,123 ops/sec** | ±2.39% | (84 runs sampled) |
| moment     | 429,814 ops/sec     | ±7.70% | (84 runs sampled) |
| fecha      | 180,108 ops/sec     | ±1.90% | (86 runs sampled) |
| date-fns   | 120,219 ops/sec     | ±1.34% | (86 runs sampled) |
| dateformat | 104,204 ops/sec     | ±1.29% | (85 runs sampled) |
| luxon      | 472 ops/sec         | ±2.01% | (81 runs sampled) |

#### Chrome 66.0.3359 (Windows 10 0.0.0)

|            | ops/sec             |        |                   |
| :--------- | ------------------: | -----: | ----------------: |
| **fdate**  | **601,323 ops/sec** | ±0.93% | (62 runs sampled) |
| moment     | 565,947 ops/sec     | ±1.14% | (60 runs sampled) |
| fecha      | 508,299 ops/sec     | ±0.83% | (63 runs sampled) |
| date-fns   | 337,258 ops/sec     | ±0.96% | (63 runs sampled) |
| dateformat | 137,248 ops/sec     | ±1.42% | (62 runs sampled) |
| luxon      | 489 ops/sec         | ±1.24% | (60 runs sampled) |

#### Firefox 59.0.0 (Windows 10 0.0.0)

|            | ops/sec             |        |                   |
| :--------- | ------------------: | -----: | ----------------: |
| fecha      | 754,953 ops/sec     | ±3.44% | (44 runs sampled) |
| moment     | 397,211 ops/sec     | ±3.44% | (46 runs sampled) |
| date-fns   | 268,545 ops/sec     | ±5.27% | (43 runs sampled) |
| **fdate**  | **168,387 ops/sec** | ±5.00% | (42 runs sampled) |
| dateformat | 56,548 ops/sec      | ±2.56% | (45 runs sampled) |
| luxon      | 462 ops/sec         | ±3.17% | (42 runs sampled) |

### Bundle size (Webpack)

|            | size        | gzipped       |
| :--------- | ----------: | ------------: |
| time-stamp | 1.12 KB     | 658 bytes     |
| **fdate**  | **2.05 KB** | **986 bytes** |
| dateformat | 3.36 KB     | 1.66 KB       |
| fecha      | 5.13 KB     | 2.06 KB       |
| dayjs      | 6.30 KB     | 2.26 KB       |
| date-fns   | 8.93 KB     | 3.02 KB       |
| luxon      | 50.86 KB    | 15.16 KB      |
| moment     | 51.29 KB    | 16.63 KB      |

## Contribute

PRs accepted.

## License

[MIT (c) 3846masa](./LICENSE)
