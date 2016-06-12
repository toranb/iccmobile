import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route("sessions", {path: "/sessions"});
    this.route("session", {path: "/sessions/:session_id"});
    this.route("speakers", {path: "/speakers"});
    this.route("speaker", {path: "/speakers/:speaker_id"});
});

export default Router;
