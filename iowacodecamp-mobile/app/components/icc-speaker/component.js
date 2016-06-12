import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import connect from 'ember-redux/components/connect';

var stateToComputed = (state) => {
  return {
    sessions: state.all.sessions,
    speaker: state.all.selectedSpeaker
  };
};

var SpeakerComponent = Ember.Component.extend({
    speakerSessions: Ember.computed('sessions.[]', 'speaker', function() {
        var speaker = this.get('speaker');
        return this.get('sessions').filter((session) => {
            return session.speaker === speaker.id;
        });
    }),
    layout: hbs`
        {{yield speaker speakerSessions}}
    `
});

export default connect(stateToComputed)(SpeakerComponent);
