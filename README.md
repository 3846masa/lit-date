# ⏰ lit-date

[![NPM](https://nodei.co/npm/lit-date.png?mini=true)](https://nodei.co/npm/lit-date/)
![filesize](https://img.badgesize.io/https://unpkg.com/lit-date.svg?compression=gzip&style=flat-square)

> Light-weight, faster datetime formatter for modern browsers.

`lit-date` is ...

- ⏰ Formatter for **Date** object
- 👼 Light-weight (**~1kB** gzipped!)
- 🦄 Very faster than other datetime libraries (e.g. `moment`)
- 🆕 Powered by `litdate literals`

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Benchmark](#benchmark)
- [Contribute](#contribute)
- [License](#license)

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

#### Node.js v10.10.0

|              |             ops/sec |        |                   |
| :----------- | ------------------: | -----: | ----------------: |
| **lit-date** | **279,762 ops/sec** | ±1.11% | (88 runs sampled) |
| time-stamp   |     247,083 ops/sec | ±1.11% | (90 runs sampled) |
| date-fns     |     244,455 ops/sec | ±1.05% | (89 runs sampled) |
| moment       |     241,140 ops/sec | ±1.33% | (91 runs sampled) |
| fecha        |     232,466 ops/sec | ±1.08% | (91 runs sampled) |
| dayjs        |     210,611 ops/sec | ±0.97% | (91 runs sampled) |
| luxon        |     167,198 ops/sec | ±1.13% | (89 runs sampled) |
| dateformat   |      96,692 ops/sec | ±1.05% | (86 runs sampled) |

#### Chrome 69.0.3497

|              |             ops/sec |        |                   |
| :----------- | ------------------: | -----: | ----------------: |
| **lit-date** | **573,465 ops/sec** | ±1.42% | (60 runs sampled) |
| time-stamp   |     387,719 ops/sec | ±2.25% | (59 runs sampled) |
| fecha        |     375,460 ops/sec | ±0.72% | (61 runs sampled) |
| date-fns     |     342,209 ops/sec | ±1.25% | (61 runs sampled) |
| moment       |     325,720 ops/sec | ±1.08% | (62 runs sampled) |
| dayjs        |     244,039 ops/sec | ±4.33% | (59 runs sampled) |
| luxon        |     167,208 ops/sec | ±1.36% | (60 runs sampled) |
| dateformat   |      97,894 ops/sec | ±1.90% | (60 runs sampled) |

#### Firefox 62.0.0

|              |               ops/sec |        |                   |
| :----------- | --------------------: | -----: | ----------------: |
| **lit-date** | **1,135,997 ops/sec** | ±2.55% | (59 runs sampled) |
| fecha        |       823,049 ops/sec | ±3.11% | (57 runs sampled) |
| time-stamp   |       531,863 ops/sec | ±4.40% | (58 runs sampled) |
| date-fns     |       435,223 ops/sec | ±3.51% | (59 runs sampled) |
| moment       |       410,513 ops/sec | ±3.49% | (61 runs sampled) |
| dayjs        |       369,565 ops/sec | ±2.85% | (59 runs sampled) |
| luxon        |       170,537 ops/sec | ±2.88% | (61 runs sampled) |
| dateformat   |        63,390 ops/sec | ±2.26% | (63 runs sampled) |

### Advanced usage

- `new Date()` -> `1月6日(木)` (written in Japanese)

#### Node.js v10.10.0

|              |             ops/sec |        |                   |
| :----------- | ------------------: | -----: | ----------------: |
| **lit-date** | **291,909 ops/sec** | ±1.26% | (88 runs sampled) |
| moment       |     258,888 ops/sec | ±1.62% | (89 runs sampled) |
| fecha        |     245,678 ops/sec | ±0.99% | (93 runs sampled) |
| date-fns     |     189,735 ops/sec | ±0.89% | (90 runs sampled) |
| dateformat   |      96,810 ops/sec | ±0.95% | (92 runs sampled) |
| luxon        |         688 ops/sec | ±1.18% | (85 runs sampled) |

#### Chrome 69.0.3497

|              |             ops/sec |        |                   |
| :----------- | ------------------: | -----: | ----------------: |
| **lit-date** | **536,842 ops/sec** | ±0.82% | (65 runs sampled) |
| fecha        |     394,640 ops/sec | ±1.58% | (62 runs sampled) |
| moment       |     322,982 ops/sec | ±1.25% | (61 runs sampled) |
| date-fns     |     254,257 ops/sec | ±1.00% | (63 runs sampled) |
| dateformat   |      96,633 ops/sec | ±0.77% | (62 runs sampled) |
| luxon        |         624 ops/sec | ±1.42% | (44 runs sampled) |

#### Firefox 62.0.0

|              |               ops/sec |        |                   |
| :----------- | --------------------: | -----: | ----------------: |
| **lit-date** | **1,208,619 ops/sec** | ±2.43% | (63 runs sampled) |
| fecha        |       827,057 ops/sec | ±4.89% | (57 runs sampled) |
| moment       |       380,293 ops/sec | ±3.39% | (56 runs sampled) |
| date-fns     |       317,868 ops/sec | ±2.57% | (61 runs sampled) |
| dateformat   |        62,233 ops/sec | ±2.06% | (63 runs sampled) |
| luxon        |           864 ops/sec | ±2.93% | (54 runs sampled) |

### Bundle size (Webpack)

|              |        size |       gzipped |
| :----------- | ----------: | ------------: |
| time-stamp   |     1.74 KB |     861 bytes |
| **lit-date** | **2.29 KB** | **943 bytes** |
| dateformat   |     3.80 KB |       1.81 KB |
| fecha        |     5.50 KB |       2.18 KB |
| dayjs        |     7.21 KB |       2.76 KB |
| date-fns     |     9.34 KB |       3.13 KB |
| moment       |    51.85 KB |      16.77 KB |
| luxon        |    60.37 KB |      18.45 KB |

## Contribute

PRs accepted.

## License

[MIT (c) 3846masa](https://github.com/3846masa/lit-date/blob/master/LICENSE)
