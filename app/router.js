import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('welcome', function() {
    this.route('how-to-use-this-documentation');
    this.route('acknowledgements');
    this.route('road-to-release');
  });
  this.route('tutorial', function() {
    this.route('installation', function() {
      this.route('tooling');
      this.route('ember');
      this.route('quickstarts');
      this.route('es6-support');
    });
    this.route('basics', function() {
      this.route('directions', function() {
        this.route('concurrency');
        this.route('commands');
        this.route('attributes');
      });
      this.route('fixtures', function() {});
      this.route('scenes', function() {});
      this.route('links');
      this.route('configuration', function() {
        this.route('tiers');
      });
    });
    this.route('text', function() {
      this.route('static');
      this.route('translations');
      this.route('callbacks');
      this.route('lxl-tags');
      this.route('html-tags');
    });
    this.route('menu', function() {
      this.route('text');
      this.route('return-value');
      this.route('slider');
      this.route('inputable');
      this.route('key');
      this.route('multi');
    });
    this.route('image', function() {
      this.route('keyframe');
      this.route('position');
      this.route('transition');
      this.route('character');
      this.route('backdrop');
      this.route('height');
      this.route('fade');
      this.route('state');
    });
    this.route('sound', function() {
      this.route('play');
      this.route('fade');
      this.route('loop');
    });
    this.route('data', function() {
      this.route('get');
    });
    this.route('publishing');
  });
  this.route('api', function() {
    this.route('engine', function() {
      this.route('usage');
      this.route('configuration', function() {
        this.route('defaults');
        this.route('usage');
        this.route('configuration-tiers');
      });
      this.route('fixtures');
    });
    this.route('stage', function() {
      this.route('scenes');
      this.route('directions', function() {
        this.route('text');
        this.route('menu');
        this.route('backdrop');
        this.route('character');
        this.route('data');
        this.route('image');
        this.route('pause');
        this.route('random');
        this.route('sound');
        this.route('scene');
        this.route('layer');
      });
      this.route('usage');
      this.route('links');
      this.route('data');
    });
    this.route('components', function() {
      this.route('menu-bar', function() {
        this.route('buttons', function() {
          this.route('load');
          this.route('reset');
          this.route('resize');
          this.route('rewind');
          this.route('save');
        });
        this.route('usage');
      });
      this.route('curtain', function() {});
    });
    this.route('plugins', function() {
      this.route('animator-velocity');
      this.route('data-manager-rewindable-lokijs');
      this.route('preloader-createjs');
      this.route('sound-manager-createjs');
      this.route('translator-ember-intl');
      this.route('icon-font-awesome');
    });
    this.route('styles', function() {
      this.route('block');
      this.route('coastal');
      this.route('full');
      this.route('caption');
      this.route('paper');
      this.route('transparent');
    });
  });
});

export default Router;
