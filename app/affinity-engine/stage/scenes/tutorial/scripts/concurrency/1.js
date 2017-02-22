import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script) {
    script.text('How would you like some quinoa salad?');
    script.text('I would love some!');
  })
});
