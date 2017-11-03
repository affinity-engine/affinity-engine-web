import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

const { inject: { service } } = Ember;

export default Component.extend({
  classNames: ['engine-container', 'engine-container-for-tutorial'],
  isFocused: false,
  intl: service(),

  config: { },

  engineIdOrScene: computed({
    get() {
      return this.get('engineId') || this.get('scene');
    }
  }),

  fixtures: {
    characters: [{
      id: 'diy',
      attrs: {
        defaultState: { pose: 'standing', expression: 'neutral' },
        layerOrder: [
          'base',
          'eyes',
          'mouth'
        ],
        states: [{
          key: { pose: 'standing' },
          layers: {
            base: 'diy-base',
            eyes: 'diy-eyes-neutral',
            mouth: 'diy-mouth-neutral'
          }
        }, {
          key: { pose: 'standing', expression: 'smiling' },
          layers: {
            mouth: 'diy-mouth-smiling'
          }
        }, {
          key: { pose: 'standing', expression: 'sad' },
          layers: {
            eyes: 'diy-eyes-right',
            mouth: 'diy-mouth-pout'
          }
        }]
      },
      links: {
        all: {
          attrs: {
            caption: 'Diy'
          }
        }
      }
    }, {
      id: 'ember',
      links: {
        all: {
          attrs: {
            caption: 'Ember',
            captionPosition: 'right'
          }
        },
        component: {
          stage: {
            direction: {
              text: {
                attrs: {
                  classNames: 'ae-paper ae-block'
                }
              }
            }
          }
        }
      }
    }],
    backdrops: [{
      id: 'bedroom',
      attrs: {
        keyframe: 'diy-bedroom',
        height: 150
      }
    }],
    images: [{
      id: 'bedroom',
      attrs: {
        keyframe: 'diy-bedroom',
        height: 150
      }
    }, {
      id: 'diy',
      attrs: {
        keyframe: 'diy-keyframe-true-neutral',
        keyframes: [{
          default: true,
          id: 'true-neutral',
          keyframe: 'diy-keyframe-true-neutral'
        }, {
          id: 'neutral-mouth-eyes-right',
          keyframe: 'diy-keyframe-neutral-mouth-eyes-right'
        }, {
          id: 'pout-eyes-right',
          keyframe: 'diy-keyframe-pout-eyes-right'
        }, {
          id: 'pout-neutral-eyes',
          keyframe: 'diy-keyframe-pout-neutral-eyes'
        }],
        defaultState: { pose: 'standing', expression: 'neutral' },
        layerOrder: [
          'base',
          'eyes',
          'mouth'
        ],
        states: [{
          key: { pose: 'standing' },
          layers: {
            base: 'diy-base',
            eyes: 'diy-eyes-neutral',
            mouth: 'diy-mouth-neutral'
          }
        }, {
          key: { pose: 'standing', expression: 'smiling' },
          layers: {
            mouth: 'diy-mouth-smiling'
          }
        }, {
          key: { pose: 'standing', expression: 'sad' },
          layers: {
            eyes: 'diy-eyes-right',
            mouth: 'diy-mouth-pout'
          }
        }]
      }
    }],
    keyframes: [{
      id: 'diy-bedroom',
      attrs: {
        src: 'tutorial/diy-bedroom.png'
      }
    }, {
      id: 'diy-keyframe-true-neutral',
      attrs: {
        src: 'tutorial/diy-keyframe-true-neutral.png'
      }
    }, {
      id: 'diy-keyframe-neutral-mouth-eyes-right',
      attrs: {
        src: 'tutorial/diy-keyframe-neutral-mouth-eyes-right.png'
      }
    }, {
      id: 'diy-keyframe-pout-eyes-right',
      attrs: {
        src: 'tutorial/diy-keyframe-pout-eyes-right.png'
      }
    }, {
      id: 'diy-keyframe-pout-neutral-eyes',
      attrs: {
        src: 'tutorial/diy-keyframe-pout-neutral-eyes.png'
      }
    }, {
      id: 'diy-base',
      attrs: {
        src: 'tutorial/diy-base.png'
      }
    }, {
      id: 'diy-eyes-neutral',
      attrs: {
        src: 'tutorial/diy-eyes-neutral.png'
      }
    }, {
      id: 'diy-eyes-right',
      attrs: {
        src: 'tutorial/diy-eyes-right.png'
      }
    }, {
      id: 'diy-mouth-neutral',
      attrs: {
        src: 'tutorial/diy-mouth-neutral.png'
      }
    }, {
      id: 'diy-mouth-smiling',
      attrs: {
        src: 'tutorial/diy-mouth-smiling.png'
      }
    }, {
      id: 'diy-mouth-pout',
      attrs: {
        src: 'tutorial/diy-mouth-pout.png'
      }
    }],
    sounds: [{
      id: 'spacewolf',
      attrs: {
        src: 'tutorial/spacewolf.mp3'
      }
    }]
  },

  progressBarOptions: {
    color: 'rgb(250, 250, 250)',
    trailColor: 'rgba(250, 250, 250, 0.62)',
    strokeWidth: 1,
    trailWidth: 0.62,
    text: {
      style: {
        position: 'absolute',
        left: '50%',
        bottom: '15px',
        transform: {
          prefix: true,
          value: 'translateX(-50%)'
        }
      },
      autoStyleContainer: false
    }
  }
});
