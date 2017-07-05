import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import { connect } from 'ember-redux';

var stateToComputed = (state) => {
  return {
    sessions: state.all.sessions,
    speakers: state.all.speakers,
    loading: state.all.loading
  };
};

var dispatchToActions = dispatch => {
  return {
    refresh: () => dispatch({type: 'REFRESH_SESSIONS', wait: 2000})
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
            var filteredByTime = models.filter((item) => {
                return item.time === time;
            });
            filteredByTime[0].get('sessions').pushObject(session);
        });
        return models;
    }),
    layout: hbs`
        {{yield everything loading (action "refresh")}}
    `
});

export default connect(stateToComputed, dispatchToActions)(SessionsComponent);
