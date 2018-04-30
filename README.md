# ⏰ fdate

[![NPM](https://nodei.co/npm/fdate.png?compact=true)](https://nodei.co/npm/fdate/)

> Light-weight, faster datetime formatter for modern browsers.

`fdate` is ...

- ⏰ **f**ormatter of **Date**
- 👼 light-weight as a **f**eather (**~1kB** gzipped!)
- 🦄 very **f**aster than other datetime libraries (e.g. `moment`)
- 🆕 powered by `Template literals`

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

See [examples](https://github.com/3846masa/fdate/tree/master/examples).

## Benchmark

See [benchmarks](https://github.com/3846masa/fdate/tree/master/benchmarks) for more details.

### Basic usage

- `new Date()` -> `2000/01/06`

#### Node.js v9.11.1

|            | ops/sec             |        |                   |
| :--------- | ------------------: | -----: | ----------------: |
| **fdate**  | **993,227 ops/sec** | ±0.97% | (87 runs sampled) |
| time-stamp | 409,736 ops/sec     | ±2.20% | (88 runs sampled) |
| date-fns   | 400,837 ops/sec     | ±1.21% | (88 runs sampled) |
| moment     | 391,224 ops/sec     | ±1.61% | (87 runs sampled) |
| dayjs      | 266,590 ops/sec     | ±1.84% | (83 runs sampled) |
| fecha      | 193,034 ops/sec     | ±2.46% | (81 runs sampled) |
| dateformat | 114,571 ops/sec     | ±1.58% | (86 runs sampled) |
| luxon      | 2,506 ops/sec       | ±1.91% | (82 runs sampled) |

#### Chrome 66.0.3359

|            | ops/sec             |        |                   |
| :--------- | ------------------: | -----: | ----------------: |
| **fdate**  | **948,727 ops/sec** | ±1.21% | (65 runs sampled) |
| time-stamp | 683,091 ops/sec     | ±1.04% | (65 runs sampled) |
| fecha      | 548,628 ops/sec     | ±0.90% | (64 runs sampled) |
| moment     | 505,969 ops/sec     | ±1.13% | (64 runs sampled) |
| date-fns   | 488,131 ops/sec     | ±0.97% | (63 runs sampled) |
| dayjs      | 307,569 ops/sec     | ±0.59% | (63 runs sampled) |
| dateformat | 133,583 ops/sec     | ±0.92% | (63 runs sampled) |
| luxon      | 2,808 ops/sec       | ±3.24% | (19 runs sampled) |

#### Firefox 59.0.0

|            | ops/sec               |        |                   |
| :--------- | --------------------: | -----: | ----------------: |
| **fdate**  | **1,373,935 ops/sec** | ±2.58% | (48 runs sampled) |
| fecha      | 988,180 ops/sec       | ±2.68% | (47 runs sampled) |
| time-stamp | 601,037 ops/sec       | ±2.84% | (45 runs sampled) |
| moment     | 479,960 ops/sec       | ±2.57% | (47 runs sampled) |
| date-fns   | 478,713 ops/sec       | ±3.20% | (47 runs sampled) |
| dayjs      | 269,816 ops/sec       | ±3.10% | (47 runs sampled) |
| dateformat | 62,120 ops/sec        | ±2.12% | (50 runs sampled) |
| luxon      | 2,945 ops/sec         | ±2.72% | (20 runs sampled) |

### Advanced usage

- `new Date()` -> `1月6日(木)` (written in Japanese)

#### Node.js v9.11.1

|            | ops/sec             |        |                   |
| :--------- | ------------------: | -----: | ----------------: |
| **fdate**  | **842,085 ops/sec** | ±1.83% | (83 runs sampled) |
| moment     | 479,692 ops/sec     | ±7.26% | (87 runs sampled) |
| fecha      | 204,389 ops/sec     | ±2.47% | (84 runs sampled) |
| date-fns   | 129,711 ops/sec     | ±1.67% | (86 runs sampled) |
| dateformat | 111,659 ops/sec     | ±1.92% | (82 runs sampled) |
| luxon      | 549 ops/sec         | ±1.23% | (87 runs sampled) |

#### Chrome 66.0.3359

|            | ops/sec               |        |                   |
| :--------- | --------------------: | -----: | ----------------: |
| **fdate**  | **1,159,099 ops/sec** | ±0.73% | (65 runs sampled) |
| moment     | 619,972 ops/sec       | ±0.74% | (62 runs sampled) |
| fecha      | 573,963 ops/sec       | ±1.10% | (62 runs sampled) |
| date-fns   | 368,440 ops/sec       | ±0.55% | (64 runs sampled) |
| dateformat | 142,079 ops/sec       | ±0.49% | (64 runs sampled) |
| luxon      | 562 ops/sec           | ±1.11% | (60 runs sampled) |

#### Firefox 59.0.0

|            | ops/sec               |        |                   |
| :--------- | --------------------: | -----: | ----------------: |
| **fdate**  | **1,358,185 ops/sec** | ±2.62% | (47 runs sampled) |
| fecha      | 965,889 ops/sec       | ±3.61% | (46 runs sampled) |
| date-fns   | 342,457 ops/sec       | ±2.67% | (48 runs sampled) |
| moment     | 449,780 ops/sec       | ±2.26% | (48 runs sampled) |
| dateformat | 60,055 ops/sec        | ±1.60% | (49 runs sampled) |
| luxon      | 554 ops/sec           | ±2.17% | (45 runs sampled) |

### Bundle size (Webpack)

|            | size        | gzipped       |
| :--------- | ----------: | ------------: |
| time-stamp | 1.12 KB     | 658 bytes     |
| **fdate**  | **2.14 KB** | **915 bytes** |
| dateformat | 3.36 KB     | 1.66 KB       |
| fecha      | 5.13 KB     | 2.06 KB       |
| dayjs      | 6.30 KB     | 2.26 KB       |
| date-fns   | 8.93 KB     | 3.02 KB       |
| luxon      | 50.86 KB    | 15.16 KB      |
| moment     | 51.29 KB    | 16.63 KB      |

## Contribute

PRs accepted.

## License

[MIT (c) 3846masa](https://github.com/3846masa/fdate/blob/master/LICENSE)
