import { guidFor } from '@ember/object/internals';
import { run } from '@ember/runloop';
import { htmlSafe } from '@ember/string';
import Component from '@ember/component';
import { computed } from '@ember/object';
import { get } from '@ember/object';

const THRESHOLD = 50;

export default Component.extend({
  classNames: 'refresh-parent',
  classNameBindings: ['pulling', 'loading'],

  uuid: computed(function() {
    return guidFor(this);
  }),

  didInsertElement() {
    const uuid = get(this, 'uuid');
    this.$().on(`touchstart.${uuid}`, this._touchStart.bind(this));
    this.$().on(`touchmove.${uuid}`, this._touchMove.bind(this));
    this.$().on(`touchend.${uuid}`, this._touchEnd.bind(this));
  },

  willDestroyElement() {
    const uuid = get(this, 'uuid');
    this.$().off(`touchstart.${uuid}`);
    this.$().off(`touchmove.${uuid}`);
    this.$().off(`touchend.${uuid}`);
  },

  _touchStart(e) {
    const y = e.originalEvent.targetTouches[0].pageY;
    const loading = get(this, 'loading');
    const atTop = this.top() === 0;

    if (loading || !atTop) {
      return;
    }

    this.setProperties({
      _startY: y,
      _lastY: y
    });
  },

  _touchMove(e) {
    const y = e.originalEvent.targetTouches[0].pageY;

    if (get(this, 'loading')) {
      return;
    }

    this.set('_lastY', y);

    if (!get(this, 'pulling')) {
      return;
    }

    const delta = get(this, 'delta');
    const dy = Math.min(delta, (THRESHOLD * 2));

    this.set('diff', dy);
  },

  _touchEnd() {
    const delta = get(this, 'delta');
    const refreshing = delta >= THRESHOLD;

    run.once(() => {
      this.setProperties({
        _startY: undefined,
        _lastY: undefined
      });
    });

    if (refreshing) {
      get(this, 'refresh')();
    }
  },

  transform: computed('loading', 'diff', 'pulling', function () {
    const diff = get(this, 'diff');
    const pulling = get(this, 'pulling');
    const loading = get(this, 'loading');

    if (pulling) {
      return this.safeString(diff);
    }

    if (loading) {
      return this.safeString(THRESHOLD);
    }

    return this.safeString(0);
  }),

  safeString: (top) => {
    return htmlSafe(`transform: translate3d(0px, ${top}px, 0px);`);
  },

  delta: computed('_lastY', '_startY', function () {
    return get(this, '_lastY') - get(this, '_startY');
  }),

  pulling: computed('_startY', 'delta', function () {
    return get(this, '_startY') && get(this, 'delta') > 0;
  }),

  top() {
    return document.body.scrollTop;
  }

});
