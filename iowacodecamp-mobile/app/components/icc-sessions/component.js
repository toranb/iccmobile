import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import connect from 'ember-redux/components/connect';

var stateToComputed = (state) => {
  return {
    sessions: state.all.sessions,
    speakers: state.all.speakers
  };
};

var SessionsComponent = Ember.Component.extend({
    everything: Ember.computed('sessions.[]', function() {
        var models = [];
        this.get('sessions').forEach((session) => {
            var time = session.time;
            var found = models.findBy('time', time);
            if(!found) {
                models.pushObject(Ember.Object.create({
                    time: time,
                    sessions: []
                }));
            }
            var speaker = this.get('speakers').filter((model) => {
                return model.id === session.speaker;
            })[0];
            Ember.set(session, 'speaker_name', speaker.name);
            var filteredByTime = models.filter((item) => {
                return item.time === time;
            });
            filteredByTime[0].get('sessions').pushObject(session);
        });
        return models;
    }),
    layout: hbs`
        {{yield everything}}
    `
});

export default connect(stateToComputed)(SessionsComponent);
