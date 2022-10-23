'use strict';

const subproject2Import = require('..');
const assert = require('assert').strict;

assert.strictEqual(subproject2Import(), 'Hello from subproject2Import');
console.info("subproject2Import tests passed");
