import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

var SessionListComponent = Ember.Component.extend({
  layout: hbs`
    <table class="table table-border">
      <tbody>
      {{#each everything as |group|}}
        <tr><td class="group-time"><b>{{group.time}}</b></td></tr>
        {{#each group.sessions as |session|}}
          {{#link-to 'session' session.id tagName="tr" class="session-row"}}
            <td><span class="session-name hide-overflow">{{session.name}}</span><span class="session-speaker-name">{{session.speaker_name}}</span>
              <span class="session-link pull-right">
                <a href="#" class="pull-right" href="#"><i class="glyphicon glyphicon-chevron-right"></i></a>
              </span>
            </td>
          {{/link-to}}
        {{/each}}
      {{else}}
      <tr class="no-sessions-found">
        <td>no sessions found</td>
      </tr>
      {{/each}}
      </tbody>
    </table>
  `
});

export default SessionListComponent;
