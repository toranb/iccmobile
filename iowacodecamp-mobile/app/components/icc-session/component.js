import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import connect from 'ember-redux/components/connect';

var stateToComputed = (state) => {
  return {
    speakers: state.all.speakers,
    session: state.all.selectedSession
  };
};

var SessionComponent = Ember.Component.extend({
    sessionSpeakers: Ember.computed('speakers.[]', 'session', function() {
        var session = this.get('session');
        return this.get('speakers').filter((speaker) => {
            return speaker.session === session.id;
        });
    }),
    layout: hbs`
        {{yield session sessionSpeakers}}
    `
});

export default connect(stateToComputed)(SessionComponent);
