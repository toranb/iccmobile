import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

var SpeakerDetailComponent = Ember.Component.extend({
    layout: hbs`
        <div class="profile-wrap">
          <div class="img-wrap">
            <img class="speaker-detail-img" src={{speaker-url speaker.img}}>
          </div>
          <div class="details-wrap">
            <span class="speaker-detail-name">{{speaker.name}}</span>
            <span class="speaker-detail-location">{{speaker.location}}</span>
            <span class="speaker-detail-web">
              <a href={{speaker.web}}>{{speaker.web}}</a>
            </span>
          </div>
        </div>
        <span class="speaker-detail-bio">{{speaker.bio}}</span>
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
