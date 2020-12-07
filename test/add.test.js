import 'mocha';

import * as assert from 'assert';

import add from '../src/add.js';


describe('Util library', function() {
  describe('add', function() {
    it('Decimals: should return 49.98 when adding 29.99 to 19.99', function() {
      assert.equal(add(29.99, 19.99), 49.98);
    });
    it('Large numbers: should return 30083.29 when adding 30079.30 to 3.99', function() {
      assert.equal(add(30079.30, 3.99), 30083.29);
    });
    it('Zero: should return 50 when adding 50 to 0', function() {
      assert.equal(add(50, 0), 50);
    });
  });
});

