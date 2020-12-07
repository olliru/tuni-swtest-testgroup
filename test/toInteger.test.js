import 'mocha';

import * as assert from 'assert';

import toInteger from '../src/toInteger.js';


describe('Util library', function() {
  describe('toInteger', function() {
     it('returns integer from a value with two decimals', function() {
       assert.equal(toInteger('3.34'), 3);
     });
     it('returns integer from a large value with two decimals with comma', function() {
      assert.equal(toInteger('398765.34'), 398765);
     });
     it('returns integer from a value with many decimals', function() {
      assert.equal(toInteger('3.34545746'), 3);
     });
  });
});

