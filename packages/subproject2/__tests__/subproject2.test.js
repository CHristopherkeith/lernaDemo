'use strict';

const subproject2 = require('..');
const assert = require('assert').strict;

assert.strictEqual(subproject2(), 'Hello from subproject2');
console.info("subproject2 tests passed");
