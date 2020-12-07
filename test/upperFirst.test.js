import 'mocha';

import * as assert from 'assert';

import upperFirst from '../src/upperFirst.js';


describe('Util library', function() {
  describe('upperFirst', function() {
     it('Changes to uppercase only the first letter of a lower case word', function() {
       assert.equal(upperFirst('fred'), 'Fred');
     });
     it('Does not change an all uppercase word', function() {
       assert.equal(upperFirst('FRED'), 'FRED');
     });
     it('Changes to uppercase only the first letter of a mixed case word', function() {
       assert.equal(upperFirst('frEd'), 'FrEd');
     });
     it('Works with an empty string', function() {
       assert.equal(upperFirst(''), '');
     });
     it('Does not change special characters', function() {
       assert.equal(upperFirst('#red'), '#red');
     });
  });
});
