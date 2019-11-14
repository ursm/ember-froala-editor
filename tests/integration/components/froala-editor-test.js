import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { isHTMLSafe, htmlSafe } from '@ember/template';
import { render, clearRender, settled, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { fillInFroalaEditor } from 'ember-froala-editor/test-support';

module('Integration | Component | froala-editor', function(hooks) {
  setupRenderingTest(hooks);


  test('@on-initialized event callback is triggered', async function(assert) {

    this.set('initializedCallback', () => {
      assert.ok(true, 'initialized callback reached');
    });

    await render(hbs`
      <FroalaEditor
        @on-initialized={{this.initializedCallback}}
      />`);

  });


  test('@on-initializationDelayed event callback is triggered when using the initOnClick option', async function(assert) {

    this.set('initializedCallback', () => {
      assert.ok(true, 'initializationDelayed callback reached');
    });

    await render(hbs`
      <FroalaEditor
        @initOnClick={{true}}
        @on-initializationDelayed={{this.initializedCallback}}
      />
    `);

  });


  test('@on-initialized event action is fired after editor is clicked when using the initOnClick option', async function(assert) {

    this.set('initializedCallback', () => {
      assert.ok(true, 'initialized callback reached');
    });

    await render(hbs`
      <FroalaEditor
        @options={{hash initOnClick=true}}
        @on-initialized={{this.initializedCallback}}
      />
    `);
    await settled();
    await click('div.fr-view');

  })


  test('@content changes while the editor is NOT initialized', async function(assert) {

    let foobar = '<p>Foobar</p>';
    let foobaz = '<p>Foobaz</p>';

    this.set('foo', foobar);

    this.set('initializedCallback', editor => {
      editor.destroy();
      this.set('foo', foobaz);
      assert.equal(this.element.textContent.trim(), 'Foobaz');
    });

    await render(hbs`
      <FroalaEditor
        @content={{this.foo}}
        @on-initialized={{this.initializedCallback}}
      />
    `);

  });


  test('@content changes while the editor is initialized', async function(assert) {

    let foobar = '<p>Foobar</p>';
    let foobaz = '<p>Foobaz</p>';

    this.set('foo', foobar);

    this.set('initializedCallback', editor => {
      this.set('foo', foobaz);
      assert.equal(editor.html.get(), foobaz);
    });

    await render(hbs`
      <FroalaEditor
        @content={{this.foo}}
        @on-initialized={{this.initializedCallback}}
      />
    `);

  });


  test('@updated setter called when content changes', async function(assert) {

    let foobar = '<p>Foobar</p>';
    let foobaz = '<p>Foobaz</p>';

    this.set('foo', foobar);

    this.set('initializedCallback', editor => {
      editor.html.set(foobaz);
      editor.undo.saveStep();
    });

    this.set('setFoo', html => {
      assert.equal(html, foobaz);
    });

    await render(hbs`
      <FroalaEditor
        @content={{this.foo}}
        @update={{this.setFoo}}
        @on-initialized={{this.initializedCallback}}
      />
    `);

  });


  test('@updated setter works with a different event name', async function(assert) {

    let foobar = '<p>Foobar</p>';
    let foobaz = '<p>Foobaz</p>';

    this.set('foo', foobar);

    this.set('initializedCallback', editor => {
      editor.html.set(foobaz);
      editor.events.trigger('blur');
    });

    this.set('setFoo', html => {
      assert.equal(html, foobaz);
    });

    await render(hbs`
      <FroalaEditor
        @content={{this.foo}}
        @update={{this.setFoo}}
        @updateEvent="blur"
        @on-initialized={{this.initializedCallback}}
      />
    `);

  });


  test('@updated setter called when editor is destroyed but content changed', async function(assert) {

    let foobar = '<p>Foobar</p>';
    let foobaz = '<p>Foobaz</p>';

    this.set('foo', foobar);

    this.set('initializedCallback', editor => {
      editor.html.set(foobaz);
      editor.undo.saveStep();
      editor.destroy();
    });

    this.set('setFoo', html => {
      assert.equal(html, foobaz);
    });

    await render(hbs`
      <FroalaEditor
        @content={{this.foo}}
        @update={{this.setFoo}}
        @on-initialized={{this.initializedCallback}}
      />
    `);

  });


  test('multiple contentChanged callbacks are called', async function(assert) {
    assert.expect(2);

    let foobar = '<p>Foobar</p>';
    let foobaz = '<p>Foobaz</p>';

    this.set('foo', foobar);

    this.set('runAssert', () => {
      assert.ok(true, 'contentChanged callback reached');
    });

    this.set('initializedCallback', editor => {
      editor.html.set(foobaz);
      editor.undo.saveStep();
    });

    await render(hbs`
      <FroalaEditor
        @content={{this.foo}}
        @update={{this.runAssert}}
        @on-contentChanged={{this.runAssert}}
        @on-initialized={{this.initializedCallback}}
      />
    `);

  });


  test('@on-destroy callback is triggered when un-rendered', async function(assert) {
    this.set('destroyedCallback', () => {
      assert.ok(true, '@on-destroy callback reached');
    });
    await render(hbs`<FroalaEditor @on-destroy={{this.destroyedCallback}} />`);
    await settled();
    await clearRender();
  });


  test('SafeString in, SafeString out', async function(assert) {

    let foobar = '<p>Foobar</p>';
    let foobaz = '<p>Foobaz</p>';

    this.set('foo', htmlSafe(foobar));

    this.set('initializedCallback', editor => {
      editor.html.set(foobaz);
      editor.undo.saveStep();
    });

    this.set('setFoo', html => {
      assert.ok(isHTMLSafe(html), 'html is SafeString');
    });

    await render(hbs`
      <FroalaEditor
        @content={{this.foo}}
        @update={{this.setFoo}}
        @on-initialized={{this.initializedCallback}}
      />
    `);

  });


  test('@options argument applies to the editor', async function(assert) {

    this.set('initializedCallback', () => {
      assert.dom('div').hasClass('gray-theme');
    });

    await render(hbs`
      <FroalaEditor
        @options={{hash theme="gray"}}
        @on-initialized={{this.initializedCallback}}
      />
    `);

  });


  test('individual @option arguments apply to the editor', async function(assert) {

    this.set('initializedCallback', () => {
      assert.dom('div').hasClass('gray-theme');
    });

    await render(hbs`
      <FroalaEditor
        @theme="gray"
        @on-initialized={{this.initializedCallback}}
      />
    `);

  });


  test('@individual arguments override the @options argument', async function(assert) {

    this.set('initializedCallback', () => {
      assert.dom('div').hasClass('dark-theme');
    });

    await render(hbs`
      <FroalaEditor
        @theme="dark"
        @options={{hash theme="gray"}}
        @on-initialized={{this.initializedCallback}}
      />
    `);

  });


  test('extended defaultOptions are properly applied', async function(assert) {

    this.set('initializedCallback', () => {
      assert.dom('div').hasClass('gray-theme');
    });

    await render(hbs`
      <ExtendedFroalaEditor
        @on-initialized={{this.initializedCallback}}
      />
    `);

  });


  test('overridden extended defaultOptions are properly applied', async function(assert) {

    this.set('initializedCallback', () => {
      assert.dom('div').hasClass('dark-theme');
    });

    await render(hbs`
      <ExtendedFroalaEditor
        @options={{hash theme="dark"}}
        @on-initialized={{this.initializedCallback}}
      />
    `);

  });


  test('extended defaultEventCallbacks are properly called', async function(assert) {

    this.set('runAssert', () => {
      assert.ok(true, 'runAssert callback reached');
    });

    await render(hbs`
      <ExtendedFroalaEditor
        @runAssert={{this.runAssert}}
      />
    `);

    await settled();

  });


  test('overridden extended defaultEventCallbacks are properly called', async function(assert) {

    this.set('runAssert', () => {
      assert.ok(true, 'runAssert callback reached');
    });

    await render(hbs`
      <ExtendedFroalaEditor
        @on-initialized={{this.runAssert}}
      />
    `);

  });


  test('fillInFroalaEditor() triggers the @update callback', async function(assert) {

    this.set('runAssert', () => {
      assert.ok(true);
    });

    await render(hbs`
      <FroalaEditor
        @update={{this.runAssert}}
        id="myEditor"
      />
    `);

    await settled();

    await fillInFroalaEditor('#myEditor', '<p>Foobar</p>');

    await settled();

  });


});
