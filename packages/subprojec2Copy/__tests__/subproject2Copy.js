'use strict';

const subproject2Copy = require('..');
const assert = require('assert').strict;

assert.strictEqual(subproject2Copy(), 'Hello from subproject2Copy');
console.info("subproject2Copy tests passed");
