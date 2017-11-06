import Ember from 'ember';

const {
  Service,
  computed,
  get
} = Ember;

const { inject: { service } } = Ember;

export default Service.extend({
  intl: service(),

  routes: computed({
    get() {
      const t = (name) => {
        return get(this, 'intl').t(`application.routes.${name}`);
      };

      return {
        welcome: {
          name: t('welcome'),
          routes: {
            index: {
              name: t('overview')
            }, 'how-to-use-this-documentation': {
              name: t('howToUseThisDocumentation')
            }, acknowledgements: {
              name: t('acknowledgements')
            }, 'road-to-release': {
              name: t('roadToRelease')
            }
          }
        }, tutorial: {
          name: t('tutorial'),
          routes: {
            index: {
              name: t('overview')
            }, installation: {
              name: t('installation'),
              routes: {
                index: {
                  name: t('overview')
                }, 'tooling': {
                  name: t('toolingSetup')
                }, 'ember': {
                  name: t('emberSetup')
                }, 'quickstarts' : {
                  name: t('quickstarts')
                }, 'es6-support' : {
                  name: t('es6Support')
                }
              }
            }, basics: {
              name: t('basics'),
              routes: {
                index: {
                  name: t('quickstart')
                }, directions: {
                  name: t('directions'),
                  routes: {
                    index: {
                      name: t('yourFirstDirection')
                    }, concurrency: {
                      name: t('concurrency')
                    }, attributes: {
                      name: t('attributes'),
                      version: {
                        operator: '>=',
                        threshold: '0.2'
                      }
                    }, commands: {
                      name: t('commands')
                    }
                  }
                }, configuration: {
                  name: t('configuration'),
                  routes: {
                    index: {
                      name: t('all')
                    }, tiers: {
                      name: t('tiers')
                    }
                  }
                }, links: {
                  name: t('links')
                }, scenes: {
                  name: t('scenes'),
                }, fixtures: {
                  name: t('fixtures')
                }
              }
            }, text: {
              name: t('Text'),
              routes: {
                index: {
                  name: t('overview')
                }, 'html-tags': {
                  name: t('htmlTags'),
                }, 'lxl-tags': {
                  name: t('lxlTags'),
                }, static: {
                  name: t('static')
                }, callbacks: {
                  name: t('callbacks')
                }, translations: {
                  name: t('translations')
                }
              }
            }, menu: {
              name: t('Menu'),
              routes: {
                index: {
                  name: t('overview')
                }, text: {
                  name: t('text')
                }, 'return-value': {
                  name: t('returnValue'),
                }, key: {
                  name: t('key')
                }, inputable: {
                  name: t('inputable')
                }, multi: {
                  name: t('multi')
                }, slider: {
                  name: t('slider')
                }
              }
            }, image: {
              name: t('Image'),
              routes: {
                index: {
                  name: t('overview')
                }, fade: {
                  name: t('fade')
                }, height: {
                  name: t('height')
                }, position: {
                  name: t('position')
                }, transition: {
                  name: t('transition')
                }, keyframe: {
                  name: t('keyframe')
                }, state: {
                  name: t('state')
                }, backdrop: {
                  name: t('backdrop')
                }, character: {
                  name: t('character')
                }
              }
            }, sound: {
              name: t('Sound'),
              routes: {
                index: {
                  name: t('overview')
                }, play: {
                  name: t('play')
                }, fade: {
                  name: t('fade')
                }, loop: {
                  name: t('loop')
                }
              }
            }, data: {
              name: t('Data'),
              routes: {
                index: {
                  name: t('overview')
                }, get: {
                  name: t('get')
                }
              }
            }, publishing: {
              name: t('Publishing')
            }
          }
        }, api: {
          name: t('api'),
          routes: {
            index: {
              name: t('overview')
            }, engine: {
              name: t('engine'),
              routes: {
                index: {
                  name: t('overview')
                }, usage: {
                  name: t('usage')
                }, configuration: {
                  name: t('configuration'),
                  routes: {
                    index: {
                      name: t('overview')
                    }, usage: {
                      name: t('usage')
                    }, defaults: {
                      name: t('defaults')
                    }, 'configuration-tiers': {
                      name: t('configurationTiers')
                    }
                  }
                }, fixtures: {
                  name: t('fixtures')
                }
              }
            }, stage: {
              name: t('stage'),
              routes: {
                index: {
                  name: t('overview')
                }, usage: {
                  name: t('usage')
                }, scenes: {
                  name: t('scenes')
                }, directions: {
                  name: t('directions'),
                  routes: {
                    index: {
                      name: t('overview')
                    }, backdrop: {
                      name: t('backdrop')
                    }, character: {
                      name: t('character')
                    }, image: {
                      name: t('image')
                    }, layer: {
                      name: t('layer')
                    }, menu: {
                      name: t('menu')
                    }, pause: {
                      name: t('pause')
                    }, random: {
                      name: t('random')
                    }, scene: {
                      name: t('scene')
                    }, sound: {
                      name: t('sound')
                    }, text: {
                      name: t('text')
                    }
                  }
                },
                links: {
                  name: t('links'),
                  version: {
                    operator: '>=',
                    threshold: '0.2'
                  }
                }, data: {
                  name: t('data')
                }
              }
            }, components: {
              name: t('components'),
              routes: {
                index: {
                  name: t('overview')
                }, 'menu-bar': {
                  name: t('menuBar'),
                  routes: {
                    index: {
                      name: t('overview')
                    }, usage: {
                      name: t('usage')
                    }, buttons: {
                      name: t('buttons'),
                      routes: {
                        index: {
                          name: t('overview')
                        }, load: {
                          name: t('load')
                        }, reset: {
                          name: t('reset')
                        }, resize: {
                          name: t('resize')
                        }, rewind: {
                          name: t('rewind')
                        }, save: {
                          name: t('save')
                        }
                      }
                    }
                  }
                }, curtain: {
                  name: t('curtain')
                }
              }
            }, plugins: {
              name: t('plugins'),
              routes: {
                index: {
                  name: t('overview')
                }, 'animator-velocity': {
                  name: t('animatorVelocity')
                }, 'data-manager-rewindable-lokijs': {
                  name: t('dataManagerRewindableLokijs')
                }, 'icon-font-awesome': {
                  name: t('iconFontAwesome')
                }, 'preloader-createjs': {
                  name: t('preloaderCreatejs')
                }, 'sound-manager-createjs': {
                  name: t('soundManagerCreatejs')
                }, 'translator-ember-intl': {
                  name: t('translatorEmberIntl')
                }
              }
            }, styles: {
              name: t('styles'),
              routes: {
                index: {
                  name: t('overview')
                }, block: {
                  name: t('block')
                }, caption: {
                  name: t('caption')
                }, full: {
                  name: t('full')
                }, coastal: {
                  name: t('coastal')
                }, paper: {
                  name: t('paper')
                }, transparent: {
                  name: t('transparent')
                }
              }
            }
          }
        }
      };
    }
  })
});
