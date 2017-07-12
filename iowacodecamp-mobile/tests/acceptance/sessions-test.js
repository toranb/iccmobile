/* global waitForFetch */

import { test } from 'qunit';
import moduleForAcceptance from 'iowacodecamp/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | sessions');

test('sessions route will show the list of available sessions', function(assert) {
    assert.expect(6);
    visit('/');
    waitForFetch();
    andThen(function() {
        assert.equal(currentURL(), '/sessions');
        var rows = find('.session-row').length;
        assert.equal(rows, 31, rows);
        var first_name = find('.session-name:eq(0)').text();
        assert.equal(first_name, 'Continuous Security');
        var last_name = find('.session-name:eq(1)').text();
        assert.equal(last_name, 'From Legacy MVC to Modern MVC: An ASP.NET Core Migration Path');
        var first_link = find('.session-link:eq(0)').attr('href');
        assert.equal(first_link, '#');
        var last_link = find('.session-link:eq(1)').attr('href');
        assert.equal(last_link, '#');
    });
});

test('session details route will show the session details', function(assert) {
    assert.expect(6);
    visit('/');
    waitForFetch();
    click('.session-link:eq(0)');
    andThen(function() {
        assert.ok(currentURL().match(/^\/sessions\/[0-9]/));
        var session_name = find('.the-session-name');
        assert.equal(session_name.text(), 'Continuous Security');
        var session_desc = find('.session-desc');
        assert.ok(session_desc.text().indexOf('Security breaches are becoming') !== -1);
        var session_time = find('.session-time');
        assert.equal(session_time.text(), '9:00 AM - 10:15 AM');
        var session_room = find('.session-room');
        assert.equal(session_room.text(), 'Prairie.Code() - Room 1');
        var speaker_name = find('.the-speaker-name');
        assert.equal(speaker_name.text(), 'Wendy Istvanick');
    });
});

test('sessions will be sorted and grouped by listing time', function(assert) {
    assert.expect(4);
    visit('/');
    waitForFetch();
    andThen(function() {
        assert.equal(currentURL(), '/sessions');
        var rows = find('.group-time').length;
        assert.equal(rows, 5, rows);
        var first_time = find('.group-time:eq(0)').text();
        assert.equal(first_time, '9:00 AM - 10:15 AM');
        var last_time = find('.group-time:eq(1)').text();
        assert.equal(last_time, '10:30 AM - 11:45 AM');
    });
});
