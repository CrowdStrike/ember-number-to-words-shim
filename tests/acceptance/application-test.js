import { module, test } from 'qunit';
import converter from 'number-to-words';

module('Acceptance | application', function() {
  test('import works', function(assert) {
    assert.equal(converter.toWords(1), 'one');
  });
});
