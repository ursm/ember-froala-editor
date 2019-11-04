import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | froala-content', function(hooks) {
  setupRenderingTest(hooks);

  test('.fr-view class is applied', async function(assert) {
    await render(hbs`<FroalaContent />`);
    assert.dom('div').hasClass('fr-view');
  });

  test('custom class names are applied', async function(assert) {
    assert.expect(2);
    await render(hbs`<FroalaContent class="foobar" />`);
    assert.dom('div').hasClass('fr-view');
    assert.dom('div').hasClass('foobar');
  });

  test('@content is output inside the block', async function(assert) {
    await render(hbs`<FroalaContent @content="foobar" />`);
    assert.equal(this.element.textContent.trim(), 'foobar');
  });

  test('@content is marked htmlSafe()', async function(assert) {
    this.set('content', '<p>foobar</p>');
    await render(hbs`<FroalaContent @content={{this.content}} />`);
    assert.equal(this.element.textContent.trim(), 'foobar');
  });

  test("block content is properly yield'ed", async function(assert) {
    await render(hbs`<FroalaContent>foobar</FroalaContent>`);
    assert.equal(this.element.textContent.trim(), 'foobar');
  });

});
