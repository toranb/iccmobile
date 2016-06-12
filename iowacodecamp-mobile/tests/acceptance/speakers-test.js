import { test } from 'qunit';
import moduleForAcceptance from 'iowacodecamp/tests/helpers/module-for-acceptance';

var first = {session: 'foo', level: 100, desc: 'first one', time: '9:00 AM - 10:15 AM', room: 'Room A', speaker: {name: 'toran', bio: 'javascript ninja', location: 'Burlington, IA', img: 'ToranBillups.jpg', web: 'http://toranbillups.com'}};
var last = {session: 'bar', level: 300, desc: 'last one', time: '10:30 AM - 11:45 AM', room: 'Room B', speaker: {name: 'nick', bio: 'rockstar hacker', location: 'Des Moines, IA', img: 'NickStarke.jpg', web: 'http://google.com'}};
var data = {'d':{'success':true,'message':null,'data':[first, last]}};

moduleForAcceptance('Acceptance | speakers', {
    beforeEach() {
        ajax('http://iowacodecamp.com/data/json', 'GET', 200, data);
    }
});

test('speakers route will show the list of available speakers', function(assert) {
    assert.expect(6);
    visit('/speakers');
    andThen(function() {
        var rows = find('.speaker-row').length;
        assert.equal(rows, 2, rows);
        var first_name = find('.speaker-name:eq(0)').text();
        assert.equal(first_name, 'toran');
        var first_location = find('.speaker-location:eq(0)').text();
        assert.equal(first_location, 'Burlington, IA');
        var last_name = find('.speaker-name:eq(1)').text();
        assert.equal(last_name, 'nick');
        var last_location = find('.speaker-location:eq(1)').text();
        assert.equal(last_location, 'Des Moines, IA');
        var first_link = find('.speaker-link:eq(0) a').attr('href');
        assert.equal(first_link, '#');
    });
});

test('speaker details route will show the speaker details', function(assert) {
    assert.expect(9);
    visit('/speakers');
    click('.speaker-link :eq(0)');
    andThen(function() {
        var speaker_name = find('.speaker-detail-name');
        assert.equal(speaker_name.text(), 'toran');
        var speaker_bio = find('.speaker-detail-bio');
        assert.equal(speaker_bio.text(), 'javascript ninja');
        var sessions = find('.speaker-session-row').length;
        assert.equal(sessions, 1);
        var first_session_name = find('.speaker-session-name:eq(0)');
        assert.equal(first_session_name.text(), 'foo');
        var first_session_link = find('.speaker-session-link:eq(0) a').attr('href');
        assert.equal(first_session_link, '#');
        var speaker_img = find('.speaker-detail-img:eq(0)');
        assert.equal(speaker_img.prop('src'), 'http://iowacodecamp.com/public/images/speakers/ToranBillups.jpg');
        var speaker_location = find('.speaker-detail-location:eq(0)');
        assert.equal(speaker_location.text(), 'Burlington, IA');
        var speaker_web = find('.speaker-detail-web');
        assert.equal(speaker_web.find('a').prop('href').trim(), 'http://toranbillups.com/');
        assert.equal(speaker_web.text().trim(), 'http://toranbillups.com');
    });
});

test('speaker details route has link to each session', function(assert) {
    assert.expect(3);
    visit('/speakers');
    click('.speaker-link:eq(0)');
    click('.speaker-session-link:eq(0) a');
    andThen(function() {
        assert.ok(currentURL().match(/^\/sessions\/[0-9]/));
        var session_name = find('.session-name');
        assert.equal(session_name.text(), 'foo');
        var speaker_name = find('.session-speaker-name');
        assert.equal(speaker_name.text(), 'toran');
    });
});
