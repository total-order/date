:date: [@total-order/date](https://total-order.github.io/date)
==

Comparison of Date objects for JavaScript.
See [docs](https://total-order.github.io/date/index.html).

> :warning: Depending on your environment, the code may require
> `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {increasing} from '@total-order/date';
increasing(new Date(0), new Date(1)) < 0; // true

import {PairingHeap as Heap} from '@heap-data-structure/pairing-heap';
const heap = new Heap(increasing);
heap.push(new Date());
```

[![License](https://img.shields.io/github/license/total-order/date.svg)](https://raw.githubusercontent.com/total-order/date/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@total-order/date.svg)](https://www.npmjs.org/package/@total-order/date)
[![Tests](https://img.shields.io/github/workflow/status/total-order/date/ci:test?event=push&label=tests)](https://github.com/total-order/date/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/david/total-order/date.svg)](https://david-dm.org/total-order/date)
[![Dev dependencies](https://img.shields.io/david/dev/total-order/date.svg)](https://david-dm.org/total-order/date?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/total-order/date.svg)](https://github.com/total-order/date/issues)
[![Downloads](https://img.shields.io/npm/dm/@total-order/date.svg)](https://www.npmjs.org/package/@total-order/date)

[![Code issues](https://img.shields.io/codeclimate/issues/total-order/date.svg)](https://codeclimate.com/github/total-order/date/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/total-order/date.svg)](https://codeclimate.com/github/total-order/date/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/total-order/date/main.svg)](https://codecov.io/gh/total-order/date)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/total-order/date.svg)](https://codeclimate.com/github/total-order/date/trends/technical_debt)
[![Documentation](https://total-order.github.io/date/badge.svg)](https://total-order.github.io/date/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@total-order/date)](https://bundlephobia.com/result?p=@total-order/date)
