import 'mocha';

import * as assert from 'assert';

import slice from '../src/slice.js';


describe('Util library', function() {
  describe('slice', function() {
     it('Returns slice from middle of array', function() {
       assert.deepEqual(slice([1, 2, 3, 4,5], 1,3), [2,3]);
     });
     it('Returns slice from start of array', function() {
       assert.deepEqual(slice([1, 2, 3, 4,5], 0,3), [1,2,3]);
     });
     it('Returns slice from end of array', function() {
       assert.deepEqual(slice([1, 2, 3, 4,5], 3), [4,5]);
     });

  });
});

