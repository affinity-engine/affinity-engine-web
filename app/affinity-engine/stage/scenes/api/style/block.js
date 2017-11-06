import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    yield script.text('ae-block', { classNames: { structural: 'ae-block' } });
    yield script.menu(['ae-block', 'ae-block', 'ae-block'], { classNames: { structural: 'ae-block' } });

    this.get('replay').perform(script);
  })
});
