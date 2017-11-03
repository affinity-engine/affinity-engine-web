import { registrant } from 'affinity-engine';
import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  soundManager: registrant('affinity-engine/sound-manager'),

  start: task(function * (script) {
    this.get('soundManager').clearSounds();

    yield script.sound('spacewolf');
  })
});
