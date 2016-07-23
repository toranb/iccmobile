import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

var SessionDetailComponent = Ember.Component.extend({
    layout: hbs`
      <div class="profile-wrap">
          <img class="speaker-detail-img round" src={{speaker-url session.speaker_image}}>
          <h4 class="the-session-name">{{session.name}}</h4>
          <div class="the-speaker-name">{{session.speaker_name}}</div>
          <div class="session-time">{{session.time}}</div>
          <div class="session-room">{{session.room}}</div>
      </div>
      <div class="session-desc">
          <p>{{session.desc}}</p>
      </div>
    `
});

export default SessionDetailComponent;
