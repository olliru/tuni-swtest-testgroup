import 'mocha';

import * as assert from 'assert';

import words from '../src/words.js';


describe('Util library', function() {
  describe('words', function() {
     it('split words', function() {
       assert.equal(words('fred'), 'fred');
     });
  });
});

