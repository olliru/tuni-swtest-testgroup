import 'mocha';

import * as assert from 'assert';

import eq from '../src/eq.js';


describe('Util library', function() {
  describe('eq', function() {
    it('Words should are the same', function() {
      assert.equal(eq('lactose-free', 'lactose-free'), true);
    });
    it('Words should not are the same', function() {
      assert.equal(eq('laktose-free', 'lactose-free'), false);
    });
    it('Different letter size: Words should not are the same', function() {
      assert.equal(eq('laCtose-free', 'lactose-free'), false);
    });
  });
});

