import { htmlSafe } from '@ember/string';
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Test Helpers');

test('Testing fillInFroalaEditor test helper', function(assert) {
  visit('/');

  andThen(() => {
    assert.equal(find('.froala-editor-instance .fr-element').html().trim(), '<p><br></p>', 'Editor empty on load');
    fillInFroalaEditor('.froala-editor-container', '<p>Foobar</p>');
  });

  andThen(() => {
    assert.equal(find('.froala-editor-instance .fr-element').html().trim(), '<p>Foobar</p>', 'Correct html entered');
    fillInFroalaEditor('.froala-editor-container', htmlSafe('<p>Foobaz</p>'));
  });

  andThen(() => {
    assert.equal(find('.froala-editor-instance .fr-element').html().trim(), '<p>Foobaz</p>', 'Correct SafeString entered');
  });
});
