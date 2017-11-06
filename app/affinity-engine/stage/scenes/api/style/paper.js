import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    yield script.text('ae-paper', { classNames: { decorative: 'ae-paper' } });
    yield script.menu(['ae-paper', 'ae-paper', 'ae-paper'], { classNames: { decorative: 'ae-paper' } });

    this.get('replay').perform(script);
  })
});
