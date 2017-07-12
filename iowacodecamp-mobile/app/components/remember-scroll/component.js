import Ember from 'ember';

const { get, inject, Component } = Ember;

export default Component.extend({
  redux: inject.service(),

  didRender() {
    this._super(...arguments);
    const redux = get(this, 'redux');
    redux.dispatch({type: 'SCROLLPREV'});
  }
});
