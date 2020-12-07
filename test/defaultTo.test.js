import 'mocha';

import * as assert from 'assert';

import defaultTo from '../src/defaultTo.js';


describe('Util library', function() {
  describe('defaultTo', function() {
    it('should return the second part when the first is null', function() {
      assert.equal(defaultTo(null, 'second'), 'second');
    });
    it('should return the first part when there is a first part', function() {
      assert.equal(defaultTo('first', 'second'), 'first');
    });
  });
});

