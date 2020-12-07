import 'mocha';

import * as assert from 'assert';

import endsWith from '../src/endsWith.js';


describe('Util library', function() {
  describe('endWith', function() {
     it('Returns true for correct end character', function() {
       assert.equal(endsWith('abcd', 'd'), true);
     });
     it('Returns false for incorrect end character', function() {
       assert.equal(endsWith('abcd', 'c'), false);
     });
     it('Returns false for empty stringr', function() {
       assert.equal(endsWith('', ' '), false);
     });
     it('Returns true for special character', function() {
       assert.equal(endsWith('abcdẽ', 'ẽ'), true);
     });
  });
});

