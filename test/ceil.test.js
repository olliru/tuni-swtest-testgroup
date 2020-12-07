import 'mocha';

import * as assert from 'assert';

import ceil from '../src/ceil.js';


describe('Util library', function() {
  describe('ceil', function() {
     it('Small numbers: should return 3.45 when input value is 3.452358 with two decimals', function() {
       assert.equal(ceil(3.452358, 2), 3.46);
     });
     it('Large numbers: should return 25673.45 when input value is 25673.452358 with two decimals', function() {
       assert.equal(ceil(25673.452358, 2), 25673.46);
     });
     it('Exact numbers: should return 50.00 when input value is 50 with two decimals', function() {
        assert.equal(ceil(50, 2), 50.00);
      });
  });
});

