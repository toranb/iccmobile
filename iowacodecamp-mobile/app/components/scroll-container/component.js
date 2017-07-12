import Ember from 'ember';
import { connect } from 'ember-redux';

const { get, inject, Component } = Ember;

const stateToComputed = state => {
  return {
    position: state.scroll.position
  };
};

const ContainerComponent = Component.extend({
  redux: inject.service(),
  classNames: 'container',

  didInsertElement() {
    this.$().on('touchend', this._touchEnd.bind(this));
  },

  willDestroyElement() {
    this.$().off('touchend');
  },

  _touchEnd() {
    const redux = get(this, 'redux');
    const position = document.body.scrollTop;
    redux.dispatch({type: 'SCROLL', position: position, previous: 0});
  },

  style: Ember.observer('position', function() {
    const position = get(this, 'position');
    document.body.scrollTop = position;
  })
});

export default connect(stateToComputed)(ContainerComponent);
