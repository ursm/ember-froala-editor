import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | froala-content', function(hooks) {
  setupRenderingTest(hooks);

  test('.fr-view class is applied', async function(assert) {

    await render(hbs`{{froala-content elementId="editor"}}`);

    assert.ok(this.$('#editor').hasClass('fr-view'));

  });


  test("'content' is output inside the block", async function(assert) {

    await render(hbs`{{froala-content content="foobar"}}`);

    assert.equal(this.element.textContent.trim(), 'foobar');

  });


  test("positional param 'content' is output inside the block", async function(assert) {

    await render(hbs`{{froala-content "foobar"}}`);

    assert.equal(this.element.textContent.trim(), 'foobar');

  });


  test("block content is properly yield'ed", async function(assert) {

    await render(hbs`{{#froala-content}}foobar{{/froala-content}}`);

    assert.equal(this.element.textContent.trim(), 'foobar');

  });

});
