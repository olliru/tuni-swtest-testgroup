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
    it('should return a numeric value when one is gicen', function() {
      assert.equal(defaultTo(5, 10), 5);
    });
    it('should return a default numeric value when no numeric input is gicen', function() {
      assert.equal(defaultTo(undefined, 10), 10);
    });
    it('should return an empty string when the input is an empty string', function() {
      assert.equal(defaultTo('', 'default'), '');
    });
  });
});

