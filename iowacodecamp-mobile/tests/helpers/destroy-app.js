import Ember from 'ember';

export default function destroyApp(application) {
  Ember.run(application, 'destroy');
  localStorage.clear();
  if (window.server) {
    window.server.shutdown();
  }
}
