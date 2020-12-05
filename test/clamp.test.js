import 'mocha';

import * as assert from 'assert';

import clamp from '../src/clamp.js';


describe('Util library', function() {
  describe('clamp', function() {
    it('Small numbers: should return 4, which is middle of the vector (1,4,7)', function() {
      assert.equal(clamp(1,4,7), 4);
    });
    it('Large numbers: should return 400, which is middle of the vector (350,400,60000)', function() {
      assert.equal(clamp(350,400,60000), 400);
    });
    it('Negative numbers: should return -50, which is middle of the vector (-300,-50,200)', function() {
      assert.equal(clamp(-300,-50,200), -50);
    });
    it('Arrange is non-linear: should return -50, which is middle of the vector (-50,200,-300)', function() {
      assert.equal(clamp(-50,200,-300), -50);
    });
  });
});

