import $ from 'jquery';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit } from '@ember/test-helpers';
import { htmlSafe } from '@ember/string';
import { fillInFroalaEditor } from 'ember-froala-editor/test-support';

module('Acceptance | Test Helper | fillInFroalaEditor', function(hooks) {
  setupApplicationTest(hooks);

  test('Testing fillInFroalaEditor test helper', async function(assert) {
    assert.expect(3);

    await visit('/');
    assert.equal($('.froala-editor-instance .fr-element').html().trim(), '<p><br></p>', 'Editor empty on load');

    await fillInFroalaEditor('.froala-editor-container', '<p>Foobar</p>');
    assert.equal($('.froala-editor-instance .fr-element').html().trim(), '<p>Foobar</p>', 'Correct html entered');

    await fillInFroalaEditor('.froala-editor-container', htmlSafe('<p>Foobaz</p>'));
    assert.equal($('.froala-editor-instance .fr-element').html().trim(), '<p>Foobaz</p>', 'Correct SafeString entered');

  });
});
