import 'mocha';

import * as assert from 'assert';

import divide from '../src/divide.js';


describe('Util library', function() {
  describe('divide', function() {
     it('should return 3 when dividing 9 with 3', function() {
       assert.equal(divide((9,3)), 3);
     });
  });
});

