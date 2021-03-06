import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    yield script.image('diy', { height: 400 }).fadeIn().keyframe('neutral-mouth-eyes-right').keyframe('pout-eyes-right').keyframe('pout-neutral-eyes').keyframe('true-neutral');

    this.get('replay').perform(script);
  })
});
