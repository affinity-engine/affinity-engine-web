import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    yield script.text('ae-full', { classNames: { structural: 'ae-full' } });
    yield script.menu(['ae-full', 'ae-full', 'ae-full'], { classNames: { structural: 'ae-full' } });

    this.get('replay').perform(script);
  })
});
