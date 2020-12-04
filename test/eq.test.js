import 'mocha';

import * as assert from 'assert';

import eq from '../src/eq.js';


describe('Util library', function() {
  describe('eq', function() {
    it('are the words the same', function() {
      assert.equal(eq('word', 'word'), true);
    });
    it('are the words the same', function() {
      assert.equal(eq('word', 'adf'), false);
    });
  });
});

