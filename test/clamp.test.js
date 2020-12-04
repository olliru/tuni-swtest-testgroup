import 'mocha';

import * as assert from 'assert';

import clamp from '../src/clamp.js';


describe('Util library', function() {
  describe('clamp', function() {
    it('middle of the vector??', function() {
      assert.equal(clamp(1,4,7), 4);
    });
  });
});

