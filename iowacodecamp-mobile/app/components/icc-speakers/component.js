import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import connect from 'ember-redux/components/connect';

var stateToComputed = (state) => {
  return {
    speakers: state.all.speakers
  };
};

var SpeakersComponent = Ember.Component.extend({
    layout: hbs`
        {{yield speakers}}
    `
});

export default connect(stateToComputed)(SpeakersComponent);
