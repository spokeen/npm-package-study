'use strict';

const koaPkg = require('..');
const assert = require('assert').strict;

assert.strictEqual(koaPkg(), 'Hello from koaPkg');
console.info('koaPkg tests passed');
