import 'mocha';

import * as assert from 'assert';

import toInteger from '../src/toInteger.js';


describe('Util library', function() {
  describe('toInteger', function() {
     it('returns integer from a value', function() {
       assert.equal(toInteger(3.345), 3);
     });
  });
});

