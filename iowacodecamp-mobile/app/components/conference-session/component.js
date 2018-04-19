import Component from '@ember/component';
import { computed } from '@ember/object';
import { get } from '@ember/object';

export default Component.extend({
  classNames: ['session'],
  classNameBindings: ['isBreak', 'isExpanded'],
  isExpanded: false,

  isBreak: computed('session.name', function() {
    return ['Lunch', 'Break'].includes(get(this, 'session.name'));
  }),

  click() {
    this.toggleProperty('isExpanded');
  }
});
