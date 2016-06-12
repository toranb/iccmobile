import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

var SpeakerListComponent = Ember.Component.extend({
  layout: hbs`
    <table class="table table-border">
      <tbody>
      {{#each speakers as |speaker|}}
        {{#link-to 'speaker' speaker.id tagName="tr" class="speaker-row"}}
          <td><span class="speaker-name hide-overflow">{{speaker.name}}</span><span class="speaker-location">{{speaker.location}}</span>
            <span class="speaker-link pull-right">
              <a href="#" class="pull-right"><i class="glyphicon glyphicon-chevron-right"></i></a>
            </span>
          </td>
        {{/link-to}}
      {{else}}
      <tr class="no-speakers-found">
        <td>no speakers found</td>
        <td></td>
      </tr>
      {{/each}}
      </tbody>
    </table>
  `
});

export default SpeakerListComponent;
