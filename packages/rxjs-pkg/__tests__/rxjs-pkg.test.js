'use strict';

const rxjsPkg = require('..');
const assert = require('assert').strict;

assert.strictEqual(rxjsPkg(), 'Hello from rxjsPkg');
console.info('rxjsPkg tests passed');
