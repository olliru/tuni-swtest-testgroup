import 'mocha';

import * as assert from 'assert';

import words from '../src/words.js';


describe('Util library', function() {
  describe('words', function() {
     it('splits single word', function() {
       assert.deepEqual(words('fred'), ['fred']);
     });
     it('splits 3 words using default splitter', function() {
       assert.deepEqual(words('fred, barney, & pebbles'), ['fred', 'barney', 'pebbles']);
     });
     it('splits 3 words using custom splitter', function() {
       assert.deepEqual(words('fred, barney, & pebbles',  /[^, ]+/g), ['fred', 'barney', '&',  'pebbles']);
     });
     it('splits words having shitespace', function() {
       assert.deepEqual(words('fred, bar ney, & pebbles'), ['fred', 'bar', 'ney', 'pebbles']);
     });
     it('splits empty string without error', function() {
       assert.deepEqual(words(''), []);
     });
     it('splits whitespace string without error', function() {
       assert.deepEqual(words('       '), []);
     });
  });
});

