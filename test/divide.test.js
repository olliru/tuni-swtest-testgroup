import 'mocha';

import * as assert from 'assert';

import divide from '../src/divide.js';


describe('Util library', function() {
  describe('divide', function() {
     it('Small numbers: should return 3 when dividing 9 with 3', function() {
       assert.equal(divide((9,3)), 3);
     });
     it('Large numbers: should return 3000 when dividing 9000 with 3000', function() {
       assert.equal(divide((9000,3000)), 3000);
     });
     it('Negative numbers: should return -3000 when dividing 9000 with -3000', function() {
       assert.equal(divide((9000,-3000)), -3000);
     });
    //  it('Decimal values: should return 3.55 when dividing 45.34 with 12.78', function() {
    //   assert.equal(divide((45,15)), 3);
    //  });
  });
});

