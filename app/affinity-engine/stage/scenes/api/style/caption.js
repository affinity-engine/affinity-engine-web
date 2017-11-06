import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    script.text('ae-caption ae-caption-left', { classNames: { structural: 'ae-caption ae-caption-left' } });
    script.text('ae-caption ae-caption-center', { classNames: { structural: 'ae-caption ae-caption-center' } });
    yield script.text('ae-caption ae-caption-right', { classNames: { structural: 'ae-caption ae-caption-right' } });

    this.get('replay').perform(script);
  })
});
