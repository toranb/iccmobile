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
            <td>
              <span class="session-name">{{session.name}}</span>
              <span class="session-speaker-name">{{session.speaker_name}}</span>
              <a class="session-link pull-right" href="#">
                <img class="icon pull-right" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEKUlEQVRoQ+1Z7VHjMBB96xQAVHBcBQcFHHYqQFQAVABUQK6CgwoIFSAqiM0VQKgAqOCgALI3K0uxk4udWBIfw6B/nljOPu3qvf0gfJJFnwQHvoC0eZJHagsJUgDrYGyZdwljEI3xwgX19VPsSIjqES7UERjHIGw2Gsp4QoIT2tHDmGCiAOGRWgdhBLKnz3gEQQN4Mp6QVXomA4yn5HmIHi7pp85jAAoGYkHcGi8w7tDDcZtxfKOOwfg9NZ6hwTgMDbdwIIU6AyAhdQdGtopBPFKb6CHDBGcgrIGRU6b7IZ4JAmIMSnBvDJjgO/X1QxdjzH5DAlhDgn5ImIUBqcLkklJ90AWEe5cLNQBwCuCaUq18vlGSYsDiQsmF3gXh0JeFLFXfgvFEmd7wNScUiDBOGhoWXCg2p5pqb3u8NxoGzZWwlYhfUHx/BCByUX9ggm3q61IvPNb7AylUcGhNmY/xTJle9zgHmwH57pTQqi77Hu1oufidF/9RoicjAAWlWpTfa4XdkYo6f1GqhUY7rxr9nlOqjzt/wG4IAxLhNNmFJ8Hbq+E6cqMOwLjw1QCTpyX4a4P8HYE4+iWTlkvO1Xl9FGU3QuaTZznEH+Wyl/QbEN/swhPwztdi3pExEpx3zbcMiAlOTS0TkK8FA5EPTFmHMaZMb3e5JE7RQzUkChADJldS0q5hgo1VCiuzp2xQSNb7SJlurvFXPJkgHZle2EJJI2EfwMrCyK6yBIKE0NkQB4gTRumQsKkUW9s9ts6/B2E9hPHqzooCZO6uDCnTh20Rwbm6AkGqwaD86nWAVOmKtHoWdkasJy4siCD9mT+oaB6xXikF0jzgAUQDTPjaPCe0C+bBtHnHuKNMl13ICOt1gEhrSAquRYvxbBguYlhFo98ae01rbyt20j51gAoQhiA8mPrDQ3faHBfNI1NdWNJEmMl4A0vk6JfdJH4vECaSUnWpLkwrS8YYPZyENOai6IjxAuEIhHpzbqko1lJ3RwxDMM5DGhheocXF3j6YD0Cmu+6WsNNuyVDN7aFa2i5vVntKpstBNKT06rIrka0MxMa2m3+U3Y6SgYbSjJa+by3tKMcGtVNe4D3jOdtFkQ69HIywmeyV3O0ME+OllYZCKwGxAxzRAAfgEQkGeIGe/6MZMM3H+l/4mYPqQWFiBkUl05WABpTq82UeagVilVgusQuhQgAsu5y1U85qRom25M57bYbZ8JOujBsK5WDstXmnEcjMFEpCKMGBb+9q2Wk2/c43Sjwk2iMzlDEY/SYwzUCqAc6jHeB0mn34Gj+/z85QchC+tVH7QiAzA5zABnUMQDNM1zBQWgykKnqChi8xQNTSn3IW0yC4TUBcd8R7gBMThCGwqtuysIZpAlKl47EtivC9RQOhzw0kwqG9+SdWUvY3t8rjD7+AeBzaq275B4+7HVH9AitUAAAAAElFTkSuQmCC" width="40" height="40">
              </a>
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
