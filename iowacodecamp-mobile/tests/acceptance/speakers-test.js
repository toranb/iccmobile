import { test } from 'qunit';
import moduleForAcceptance from 'iowacodecamp/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | speakers');

test('speakers route will show the list of available speakers', function(assert) {
    assert.expect(6);
    visit('/speakers');
    andThen(function() {
        var rows = find('.speaker-row').length;
        assert.equal(rows, 31, rows);
        var first_name = find('.speaker-name:eq(0)').text();
        assert.equal(first_name, 'Wendy Istvanick');
        var first_location = find('.speaker-location:eq(0)').text();
        assert.equal(first_location, 'Chicago, IL');
        var last_name = find('.speaker-name:eq(1)').text();
        assert.equal(last_name, 'Scott Addie');
        var last_location = find('.speaker-location:eq(1)').text();
        assert.equal(last_location, 'Madison, WI');
        var first_link = find('.speaker-link:eq(0)').attr('href');
        assert.equal(first_link, '#');
    });
});

test('speaker details route will show the speaker details', function(assert) {
    assert.expect(9);
    visit('/speakers');
    click('.speaker-link :eq(0)');
    andThen(function() {
        var speaker_name = find('.speaker-detail-name');
        assert.equal(speaker_name.text(), 'Wendy Istvanick');
        var speaker_bio = find('.speaker-detail-bio');
        assert.ok(speaker_bio.text().indexOf('Wendy has been a developer') !== -1);
        var sessions = find('.speaker-session-row').length;
        assert.equal(sessions, 1);
        var first_session_name = find('.speaker-session-name:eq(0)');
        assert.equal(first_session_name.text(), 'Continuous Security');
        var first_session_link = find('.speaker-session-link:eq(0) a').attr('href');
        assert.equal(first_session_link, '#');
        var speaker_img = find('.speaker-detail-img:eq(0)');
        assert.ok(speaker_img.attr('src').endsWith('/images/xyz.jpg'));
        var speaker_location = find('.speaker-detail-location:eq(0)');
        assert.equal(speaker_location.text(), 'Chicago, IL');
        var speaker_web = find('.speaker-detail-web');
        assert.equal(speaker_web.find('a').prop('href').trim(), 'http://jemappellewendyi.com/');
        assert.equal(speaker_web.text().trim(), 'http://jemappellewendyi.com');
    });
});

test('speaker image will have default png when no other available', function(assert) {
    assert.expect(2);
    visit('/speakers');
    click('.speaker-link:eq(1)');
    andThen(function() {
        var speaker_name = find('.speaker-detail-name');
        assert.equal(speaker_name.text(), 'Scott Addie');
        var speaker_img = find('.speaker-detail-img:eq(0)');
        assert.ok(speaker_img.prop('src').endsWith('/images/default.png'));
    });
});

test('speaker details route has link to each session', function(assert) {
    assert.expect(3);
    visit('/speakers');
    click('.speaker-link:eq(0)');
    click('.speaker-session-link:eq(0) a');
    andThen(function() {
        assert.ok(currentURL().match(/^\/sessions\/[0-9]/));
        var session_name = find('.the-session-name');
        assert.equal(session_name.text(), 'Continuous Security');
        var speaker_name = find('.the-speaker-name');
        assert.equal(speaker_name.text(), 'Wendy Istvanick');
    });
});
