import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    yield script.text('ae-coastal', { classNames: { decorative: 'ae-coastal' } });
    yield script.menu(['ae-coastal', 'ae-coastal', 'ae-coastal'], { classNames: { decorative: 'ae-coastal' } });

    this.get('replay').perform(script);
  })
});
