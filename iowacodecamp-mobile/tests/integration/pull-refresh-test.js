import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';
import { moduleForComponent, test } from 'ember-qunit';

function touchEvent(type, y) {
  return new Ember.$.Event(type, {
    originalEvent: {
      targetTouches: [{
        pageY: y
      }]
    }
  });
}

moduleForComponent('pull-refresh', 'Integration | Component | pull-refresh', {
  integration: true,
  setup(assert) {
    this.set('refreshInvoked', false);

    this.refreshFired = fired => {
      let method = fired ? 'ok' : 'notOk';
      assert[method](this.get('refreshInvoked'));
    };

    this.expectTop = top => {
      let transform = `matrix(1, 0, 0, 1, 0, ${top})`;
      assert.equal( this.$('.refresh-child').css('transform'), transform);
    };

    this.expectPulling = pulling => {
      let method = pulling ? 'ok' : 'notOk';
      assert[method](this.$('.refresh-parent').hasClass('pulling'));
    };

    this.expectLoading = loading => {
      let method = loading ? 'ok' : 'notOk';
      assert[method](this.$('.refresh-parent').hasClass('loading'));
    };

    this.refreshAction = () => {
      this.set('refreshInvoked', true);
      this.set('loading', true);
      new Ember.RSVP.Promise((resolve) => {
        Ember.run.later(() => {
          this.set('loading', false);
          resolve();
        }, 50);
      });
    };

    this.pullDown = (start, end) => {
      Ember.run(() => {
        let startEvent = touchEvent('touchstart', start);
        let moveEvent = touchEvent('touchmove', end);
        this.$('.refresh-child').trigger(startEvent);
        this.$('.refresh-child').trigger(moveEvent);
      });
    };

    this.letGo = () => {
      Ember.run(() => {
        let endEvent = touchEvent('touchend');
        this.$('.refresh-child').trigger(endEvent);
      });
    };

    this.set('loading', false);
    this.set('refresh', () => {
      this.refreshAction();
    });
  }
});

test('should render component and any html inside the block', function(assert) {
  this.render(hbs`
    <div class="container">
      {{#pull-refresh refresh=refresh loading=loading}}
        <span>X</span>
      {{/pull-refresh}}
    </div>
  `);

  assert.equal(this.$().find('span').length, 1);
  assert.equal(this.$().find('span').text(), 'X');
  assert.equal(this.$().find('.refresh-parent').length, 1);
  assert.equal(this.$().find('.refresh-child').length, 1);
});

test('pull and let go will refresh when delta >= 50', function() {
  this.render(hbs`
    <div class="container">
      {{#pull-refresh refresh=refresh loading=loading}}
        <span>X</span>
      {{/pull-refresh}}
    </div>
  `);

  this.expectTop(0);
  this.expectPulling(false);
  this.expectLoading(false);
  this.refreshFired(false);

  this.pullDown(10, 60);

  this.expectTop(50);
  this.expectPulling(true);
  this.expectLoading(false);
  this.refreshFired(false);

  this.letGo();

  this.expectTop(50);
  this.expectPulling(false);
  this.expectLoading(true);
  this.refreshFired(true);

  return wait().then(() => {
    this.expectTop(0);
    this.expectPulling(false);
    this.expectLoading(false);
    this.refreshFired(true);
  });
});

test('pull and let go will NOT refresh when delta < 50', function() {
  this.render(hbs`
    <div class="container">
      {{#pull-refresh refresh=refresh loading=loading}}
        <span>X</span>
      {{/pull-refresh}}
    </div>
  `);

  this.expectTop(0);
  this.expectPulling(false);
  this.expectLoading(false);
  this.refreshFired(false);

  this.pullDown(10, 50);

  this.expectTop(40);
  this.expectPulling(true);
  this.expectLoading(false);
  this.refreshFired(false);

  this.letGo();

  this.expectTop(0);
  this.expectPulling(false);
  this.expectLoading(false);
  this.refreshFired(false);

  return wait().then(() => {
    this.expectTop(0);
    this.expectPulling(false);
    this.expectLoading(false);
    this.refreshFired(false);
  });
});

test('over pulling will max out at 100 and snap back to preserve the default delta of 50', function() {
  this.render(hbs`
    <div class="container">
      {{#pull-refresh refresh=refresh loading=loading}}
        <span>X</span>
      {{/pull-refresh}}
    </div>
  `);

  this.expectTop(0);
  this.expectPulling(false);
  this.expectLoading(false);
  this.refreshFired(false);

  this.pullDown(10, 310);

  this.expectTop(100);
  this.expectPulling(true);
  this.expectLoading(false);
  this.refreshFired(false);

  this.letGo();

  this.expectTop(50);
  this.expectPulling(false);
  this.expectLoading(true);
  this.refreshFired(true);

  return wait().then(() => {
    this.expectTop(0);
    this.expectPulling(false);
    this.expectLoading(false);
    this.refreshFired(true);
  });
});

test('when container is not at the top', function () {
  this.render(hbs`
    <div class="parent" style="overflow: hidden;">
      <div class="wrapper" style="position: absolute; overflow: auto; height: 100%">
        <ul class="container" style="height: 1500px;">
          {{#pull-refresh refresh=refresh loading=loading}}
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
            <li>E</li>
            <li>F</li>
            <li>G</li>
          {{/pull-refresh}}
        </ul>
      </div>
    </div>
  `);

  this.expectTop(0);
  this.expectPulling(false);
  this.expectLoading(false);
  this.refreshFired(false);

  Ember.$('.wrapper').scrollTop(80);

  this.expectTop(0);
  this.expectPulling(false);
  this.expectLoading(false);
  this.refreshFired(false);

  this.pullDown(10, 60);

  this.expectTop(0);
  this.expectPulling(false);
  this.expectLoading(false);
  this.refreshFired(false);

  this.letGo();

  this.expectTop(0);
  this.expectPulling(false);
  this.expectLoading(false);
  this.refreshFired(false);

  return wait().then(() => {
    this.expectTop(0);
    this.expectPulling(false);
    this.expectLoading(false);
    this.refreshFired(false);
  });
});
