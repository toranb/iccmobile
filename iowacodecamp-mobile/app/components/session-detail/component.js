import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

var SessionDetailComponent = Ember.Component.extend({
    layout: hbs`
      <h3 class="session-name">{{session.name}}</h3>
      <span class="session-desc">{{session.desc}}</span>
      <span class="session-time">{{session.time}}</span>
      <span class="session-room">{{session.room}}</span>
      <span class="session-level">{{session.level}}</span>
      <h3>Speakers for this session</h3>
      <table class="table">
        <tbody>
        {{#each speakers as |speaker|}}
        <tr class="session-speaker-row">
          <td class="session-speaker-name">{{speaker.name}}</td>
          <td>
            {{#link-to 'speaker' speaker.id tagName="td" class="session-speaker-link"}}
              <a href="#" class="pull-right"><i class="glyphicon glyphicon-chevron-right"></i></a>
            {{/link-to}}
          </td>
        </tr>
        {{else}}
        <tr class="no-speakers-found">
          <td>no speakers found for this session</td>
          <td></td>
        </tr>
        {{/each}}
        </tbody>
      </table>
    `
});

export default SessionDetailComponent;
