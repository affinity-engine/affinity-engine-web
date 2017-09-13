import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script) {
    script.text('engines.tutorial.basics.micTest');
    script.text('engines.tutorial.basics.hearingYou');
  })
});