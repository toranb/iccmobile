import Ember from 'ember';
import { connect } from 'ember-redux';

const { get, inject, Component } = Ember;

const stateToComputed = state => {
  return {
    position: state.scroll.position
  };
};

const RememberScrollComponent = Component.extend({
  redux: inject.service(),

  didInsertElement() {
    this.$().on('touchend', this._touchEnd.bind(this));
  },

  willDestroyElement() {
    this.$().off('touchend');
  },

  didRender() {
    this._super(...arguments);
    document.body.scrollTop = get(this, 'position');
  },

  _touchEnd() {
    const redux = get(this, 'redux');
    redux.dispatch({type: 'SCROLL', position: document.body.scrollTop});
  }
});

export default connect(stateToComputed)(RememberScrollComponent);
