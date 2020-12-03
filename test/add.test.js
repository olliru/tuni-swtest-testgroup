import 'mocha';

import * as assert from 'assert';

import add from '../src/add.js';


describe('Util library', function() {
  describe('add', function() {
    it('should return 3 when adding 1 to 2', function() {
      assert.equal(add(1,2), 3);
    });
    it('should return 0 when adding 0 to 0', function() {
      assert.equal(add(0,0), 0);
    });
  });
});

