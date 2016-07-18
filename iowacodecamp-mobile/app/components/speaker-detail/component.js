import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

var SpeakerDetailComponent = Ember.Component.extend({
    layout: hbs`
        <div class="profile-wrap">
          <img class="speaker-detail-img round" src={{speaker-url speaker.img}}>
          <div class="speaker-detail-name">{{speaker.name}}</div>
          <div class="speaker-detail-location">{{speaker.location}}</div>
          <div class="speaker-detail-web">
            <a href={{speaker.web}}>{{speaker.web}}</a>
          </div>
        </div>
        <div class="speaker-detail-bio"><p>{{speaker.bio}}</p></div>
        <h3>Sessions for this speaker</h3>
        <table class="table">
          <tbody>
          {{#each sessions as |session|}}
          <tr class="speaker-session-row">
            <td class="speaker-session-name">{{session.name}}</td>
            <td>
              {{#link-to 'session' session.id tagName="td" class="speaker-session-link"}}
                <a href="#" class="pull-right"><i class="glyphicon glyphicon-chevron-right"></i></a>
              {{/link-to}}
            </td>
          </tr>
          {{else}}
          <tr class="no-sessions-found">
            <td>no sessions found for this speaker</td>
            <td></td>
          </tr>
          {{/each}}
          </tbody>
        </table>
    `
});

export default SpeakerDetailComponent;
