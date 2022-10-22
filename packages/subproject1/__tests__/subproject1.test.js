'use strict';

const subproject1 = require('..');
const assert = require('assert').strict;

assert.strictEqual(subproject1(), 'Hello from subproject1');
console.info("subproject1 tests passed");
