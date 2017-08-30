import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script) {
    script.text("Whoa! This is really cool!");
    script.text("Yeah? Let me see.");
  })
});
