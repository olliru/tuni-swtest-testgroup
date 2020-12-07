import 'mocha';

import * as assert from 'assert';

import drop from '../src/drop.js';


describe('Util library', function() {
  describe('drop', function() {
    it('Small values: should return [4,7], when split vector (1,4,7) from second value.', function() {
      assert.deepEqual(drop([1,4,7],1), [4,7]);
    });
    it('Different order: should return [1,7], when split vector (4,1,7) from second value.', function() {
      assert.deepEqual(drop([4,1,7],1), [1,7]);
    });
    it('Large vector: should return [1,8,4,2,5,78,23,78], when split vector (5,1,8,4,2,5,78,23,78) from second value.', function() {
      assert.deepEqual(drop([5,1,8,4,2,5,78,23,78],1), [1,8,4,2,5,78,23,78]);
    });
    it('Large vector: should return [78], when split vector (5,1,8,4,2,5,78,23,78) from second latest value.', function() {
      assert.deepEqual(drop([5,1,8,4,2,5,78,23,78],8), [78]);
    });
  });
});

