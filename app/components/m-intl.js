import Ember from 'ember';
import markdownit from 'markdown-it';
import markdownItHighlight from 'affinity-engine-web/utils/markdown-it-highlight';

const {
  Component,
  computed,
  get,
  isPresent
} = Ember;

const { computed: { readOnly } } = Ember;
const { inject: { service } } = Ember;
const { String: { underscore } } = Ember;

const headers = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const converter = markdownit({
  html: true,
  linkify: true,
  typographer: true
}).use(markdownItHighlight);

function scrollToAnchor(anchor) {
  if (anchor) {
    Ember.run.later(() => {
      const position = Ember.$(`a[name="${anchor}"]`).position();

      if (position) {
        const $main = Ember.$('.main');

        $main.scrollTop(position.top + $main.position().top);
      }
    }, 50);
  }
}

export default Component.extend({
  intl: service(),
  docVersionTracker: service(),

  _locale: readOnly('i18n.locale'),
  _version: readOnly('docVersionTracker.version'),
  _versions: readOnly('docVersionTracker.versions'),

  text: computed('path', '_locale', '_version', {
    get() {
      const path = get(this, 'path');
      const intl = get(this, 'intl');
      const selectedVersion = get(this, '_version');
      const versions = get(this, '_versions');
      const version = versions.slice(versions.indexOf(selectedVersion)).find((version) => {
        return intl.exists(`${version}.${path}`);
      });
      const key = isPresent(version) ? `${version}.${path}` : path;
      const translation = intl.findTranslationByKey(key);

      return converter.render(translation).replace(/<a /g, '<a target="_blank"');
    }
  }),

  didRender(...args) {
    this._super(...args);

    const application = Ember.getOwner(this).lookup('controller:application');
    const anchor = application.get('anchor');

    requestAnimationFrame(() => {
      scrollToAnchor(anchor);
    });

    headers.forEach((tag) => {
      this.$(tag).each(function() {
        const $elem = Ember.$(this);

        if ($elem.parent().prop('tagName') === 'ASIDE') { return; }

        const text = underscore($elem.text());

        $elem
          .before(`<a class="section-anchor-scroll-point" name="${text}"></a>`)
          .append('<i class="fa fa-link"></i>')
          .addClass('section-anchor')
          .on('click.m-anchor', () => {
            application.set('anchor', text);
            scrollToAnchor(text);
          });
      });
    });
  },

  willDestroy(...args) {
    headers.forEach((tag) => {
      Ember.$(this.element).find(tag).each(function() {
        Ember.$(this).off('.m-anchor');
      });
    });

    this._super(...args);
  }
});
