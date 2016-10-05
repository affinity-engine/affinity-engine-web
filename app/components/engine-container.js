import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  classNames: ['engine-container'],

  isFocused: true,

  config: {
    component: {
      stage: {
        direction: {
          text: {
            classNames: {
              structural: 'ae-bottom-block'
            },
            lxlTransition: {
              effect: {
                translateX: [0, '5px'],
                translateY: [0, '-2px'],
                scaleX: [1, 1.25],
                scaleY: [1, 1.25]
              },
              rate: 10
            }
          }
        }
      }
    }
  },

  fixtures: {
    characters: [{
      id: 'ember',
      name: 'Ember',
      namePosition: 'right',
      height: 360,
      keyframes: [{
        id: 'ember-default'
      }, {
        id: 'ember-smiling',
        expression: 'smiling'
      }, {
        id: 'ember-proud',
        expression: 'proud'
      }, {
        id: 'ember-obviously',
        expression: 'obviously'
      }]
    }, {
      id: 'diy',
      name: 'Diy',
      height: 380,
      keyframes: [{
        id: 'diy-default'
      }, {
        id: 'diy-smiling',
        expression: 'smiling'
      }, {
        id: 'diy-embarrassed',
        expression: 'embarrassed'
      }, {
        id: 'diy-excited',
        expression: 'excited'
      }]
    }],
    backdrops: [{
      id: 'diy-bedroom',
      keyframes: [{
        id: 'diy-bedroom'
      }]
    }],
    keyframes: [{
      id: 'ember-default',
      caption: 'Ember',
      src: 'affinity-engine/characters/ember/default.png'
    }, {
      id: 'ember-smiling',
      caption: 'Ember',
      src: 'affinity-engine/characters/ember/smiling.png'
    }, {
      id: 'ember-proud',
      caption: 'Ember',
      src: 'affinity-engine/characters/ember/proud.png'
    }, {
      id: 'ember-obviously',
      caption: 'Ember',
      src: 'affinity-engine/characters/ember/obviously.png'
    }, {
      id: 'diy-default',
      caption: 'Diy',
      src: 'affinity-engine/characters/diy/default.png'
    }, {
      id: 'diy-smiling',
      caption: 'Diy',
      src: 'affinity-engine/characters/diy/smiling.png'
    }, {
      id: 'diy-embarrassed',
      caption: 'Diy',
      src: 'affinity-engine/characters/diy/embarrassed.png'
    }, {
      id: 'diy-excited',
      caption: 'Diy',
      src: 'affinity-engine/characters/diy/excited.png'
    }, {
      id: 'diy-bedroom',
      caption: 'Diy\'s bedroom',
      src: 'affinity-engine/backdrops/diy-bedroom.png'
    }]
  },

  progressBarOptions: {
    color: 'rgb(250, 250, 250)',
    trailColor: 'rgba(250, 250, 250, 0.62)',
    strokeWidth: 4,
    trailWidth: 4 * 0.62
  }
});