import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, find, findAll, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { patchReducer } from 'iowacodecamp/tests/helpers/patch-reducer';
import { startMirage } from 'iowacodecamp/initializers/ember-cli-mirage';
import { clearLocalStorage } from 'iowacodecamp/tests/helpers/local-storage';

module('Integration | Component | conference-session', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    patchReducer({});
    this.server = startMirage();
    return clearLocalStorage();
  });

  hooks.afterEach(function() {
    this.server.shutdown();
  });

  test('clicking star will rate session', async function(assert) {
    assert.expect(10);

    this.set('session', {
      id: 'V2hlbiBpcyB0aGUgZmVhdHVyZSBkb25lIGRvbmU/',
      name: 'When is the feature done done?',
      speaker: 'TWF0dCBXaW5nZXI=',
      speaker_name: 'Matt Winger',
      desc: 'demo',
      room: 'Room 113',
      time: '12:45 PM - 2:00 PM'
    });

    await render(hbs`{{conference-session session=session}}`);

    const redux = this.owner.lookup('service:redux');
    let reviews = redux.getState()['reviews'];
    assert.deepEqual(reviews, {
      all: {}
    });

    assert.equal(find('small').textContent.trim(), '12:45 PM - 2:00 PM');
    assert.equal(find('h3').textContent.trim(), 'When is the feature done done?');
    assert.equal(find('.speakers li').textContent.trim(), 'Matt Winger');
    assert.equal(find('.description p').textContent.trim(), 'demo');
    assert.equal(findAll('.star-group .star-container span').length, 10);

    const encodedUri = 'V2hlbiBpcyB0aGUgZmVhdHVyZSBkb25lIGRvbmU%2F';
    this.server.post(`/api/reviews/:uuid/${encodedUri}`, (db, request) => {
      const body = JSON.parse(request.requestBody);
      assert.deepEqual(body, {rating: 3});
      assert.equal(request.method, 'POST');
      assert.deepEqual(request.requestHeaders, {
        'content-type': 'application/json'
      });
    });

    await click('.star-group .star-container span:nth-of-type(3)');

    reviews = redux.getState()['reviews'];
    assert.deepEqual(reviews, {
      all: {
        'V2hlbiBpcyB0aGUgZmVhdHVyZSBkb25lIGRvbmU/': {
          rating: 3
        }
      }
    });
  });

  test('iowa code camp sessions will not offer 5 star rating', async function(assert) {
    assert.expect(2);

    this.set('session', {
      id: 'THVuY2g=',
      name: 'Lunch',
      speaker: 'SW93YSBDb2RlIENhbXA=',
      speaker_name: 'Iowa Code Camp'
    });

    await render(hbs`{{conference-session session=session}}`);

    assert.equal(find('.speakers li').textContent.trim(), 'Iowa Code Camp');
    assert.equal(findAll('.star-group .star-container span').length, 0);
  });
});
