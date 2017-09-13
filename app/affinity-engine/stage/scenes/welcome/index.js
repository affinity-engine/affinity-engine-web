import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    const stage = script.layer('stage.image').transition({ effect: { translateY: '20%', translateX: '13%', opacity: 0 }, duration: 0 });
    const bedroom = script.backdrop('diy-bedroom').fadeIn();
    const ember = script.character('ember').state({ eyes: 'left', expression: 'proud' }).fadeIn();
    const diy = script.character('diy').transition({ effect: { translateZ: '-5px', translateY: '-5%' } }).fadeIn();

    yield diy._.text('engines.welcome.index.diyEmbarassing');
    yield ember._.text('engines.welcome.index.emberPushButton');
    yield diy._.text('engines.welcome.index.diyThisOne');

    yield script.pause(100);

    stage.transition({ effect: { opacity: 1 } });

    yield script.pause(750);

    diy.expression('excited');

    yield script.pause(250);
    ember.delay(250).state({ eyes: 'neutral' }).delay(250);
    const bingoText = diy._.text('engines.welcome.index.diyBingo');

    yield script.pause(1500);
    diy.transition({ effect: { translateZ: '50px', translateY: '5%', left: '50%' }, duration: 1000 });
    yield script.pause(500);
    stage.transition({ effect: { translateY: '-6%', translateX: '1%', rotateZ: '3deg' }, duration: 750 }).then(() => {
      stage.transition({ effect: { translateY: '2%', translateX: '-1%', rotateZ: '-1deg' }, duration: 750 }).then(() => {
        stage.transition({ effect: { translateY: 0, translateX: 0, rotateZ: 0 }, duration: 400 });
      });
    });

    yield script.pause(2000);

    bingoText.close();

    yield diy._.text('engines.welcome.index.diyPerfect');
    diy.transition({ effect: { translateZ: 0, translateY: 0, left: '32%' }, duration: 1250 });
    yield script.pause(250);

    ember.state({ eyes: 'left' });
    yield diy.expression('smiling')._.text('engines.welcome.index.diyName');
    diy.state({ expression: 'neutral', eyes: 'right' });
    yield ember.state({ eyes: 'neutral', expression: 'smiling' })._.text('engines.welcome.index.emberName');
    ember.expression('neutral');
    yield diy.state({ eyes: 'neutral', expression: 'smiling' })._.text('engines.welcome.index.diyTourGuides');
    diy.state({ eyes: 'neutral', expression: 'neutral' });
    yield ember.expression('smiling')._.text('engines.welcome.index.emberMakeGames');
    ember.delay(500).state({ expression: 'neutral', eyes: 'left' });
    yield diy.state({ expression: 'excited', eyes: 'right' }).state({ brows: 'down' }, 325).state({ brows: 'up' }, 325)._.text('engines.welcome.index.diyLoveGames');
    diy.state({ brows: 'neutral' });
    yield ember._.text('engines.welcome.index.emberLoveGames');
    yield script.pause(250);
    yield diy.state({ eyes: 'neutral', expression: 'smiling' })._.text('engines.welcome.index.diyTry');
    diy.state({ eyes: 'right', expression: 'neutral' });
    yield ember.state({ expression: 'proud', eyes: 'neutral' })._.text('engines.welcome.index.emberGetStarted');
    ember.delay(250).state({ eyes: 'left', expression: 'neutral' });
    yield diy.state({ eyes: 'neutral', expression: 'smiling' })._.text('engines.welcome.index.diyDocumentation');
    yield ember.expression('proud')._.text('engines.welcome.index.emberWeWill');

    diy.delay(50).state({ eyes: 'right' });
    ember.delay(150).state({ eyes: 'left', expression: 'proud' });

    this.get('replay').perform(script);
  })
});
