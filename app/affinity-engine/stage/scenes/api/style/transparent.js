import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    yield script.text('ae-transparent', { classNames: { decorative: 'ae-transparent' } });
    yield script.menu(['ae-transparent', 'ae-transparent', 'ae-transparent'], { classNames: { decorative: 'ae-transparent' } });

    this.get('replay').perform(script);
  })
});
