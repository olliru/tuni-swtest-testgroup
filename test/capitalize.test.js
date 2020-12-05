import 'mocha';

import * as assert from 'assert';

import capitalize from '../src/capitalize.js';


describe('Util library', function() {
  describe('capitalize', function() {
     it('should return first letter upper and other lower when input has all letters upper', function() {
       assert.equal(capitalize('MILK'), 'Milk');
     });
     it('should return first letter upper and other lower when input has some letters upper', function() {
      assert.equal(capitalize('yOgurT'), 'Yogurt');
     });
     it('should return first letter upper and other lower when input has two parts', function() {
      assert.equal(capitalize('ICE CREAM'), 'Ice cream');
     });
  });
});
