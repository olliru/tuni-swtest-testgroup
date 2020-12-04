import 'mocha';

import * as assert from 'assert';

import defaultTo from '../src/defaultTo.js';


describe('Util library', function() {
  describe('defaultTo', function() {
    it('should return empty to word', function() {
      assert.equal(defaultTo(null, 'word'), 'word');
    });
    it('should return empty to word', function() {
      assert.equal(defaultTo('first', 'word'), 'first');
    });
  });
});

