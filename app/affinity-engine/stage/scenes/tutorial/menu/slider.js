import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    const food = yield script.menu([{ key: 'engines.tutorial.menu.kale.key', text: 'engines.tutorial.menu.kale.text' }, { key: 'engines.tutorial.menu.kimchi.key', text: 'engines.tutorial.menu.kimchi.text' }, { key: 'engines.tutorial.menu.almonds.key', text: 'engines.tutorial.menu.almonds.text' }, { key: 'engines.tutorial.menu.custom.key', text: 'engines.tutorial.menu.custom.text', inputable: true }], { text: 'engines.tutorial.menu.text1' });
    const amount = yield script.menu([{
      text: 'engines.tutorial.menu.text2',
      slider: {
        start: 1,
        step: 1,
        range: {
          min: 1,
          max: 100
        }
      }
    }, {
      key: 'engines.tutorial.menu.multiSubmit.key',
      text: 'engines.tutorial.menu.multiSubmit.text',
      multiSubmit: true
    }])

    yield script.text(amount.key);
    yield script.text(amount.text);
    yield script.text(amount.value);
    yield script.text(amount.selections[0].value);

    this.get('replay').perform(script);
  })
});
