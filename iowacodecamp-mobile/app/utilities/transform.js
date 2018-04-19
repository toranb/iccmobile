import { uuid } from 'iowacodecamp/utilities/uuid';

const selectSpeaker = function(speakers, speaker_id) {
  const selected = speakers.filter((speaker) => {
    return speaker.id === parseInt(speaker_id, 10);
  });
  return {
    selectedSpeaker: selected[0]
  };
};

const selectSession = function(sessions, session_id) {
  const selected = sessions.filter((session) => {
    return session.id === parseInt(session_id, 10);
  });
  return {
    selectedSession: selected[0]
  };
};

const deserialize = function(response) {
  const sessions = [];
  const speakers = [];
  response.data.forEach(function(data) {
    const session_id = uuid();
    const speaker_id = uuid();
    const session = {id: session_id, name: data.session, level: data.level, time: data.time, room: data.room, desc: data.desc, speaker: speaker_id, speaker_name: data.speaker.name, speaker_image: data.speaker.imgLarge};
    const speaker = {id: speaker_id, name: data.speaker.name, bio: data.speaker.bio, session: session_id, imgLarge: data.speaker.imgLarge, location:data.speaker.location, web: data.speaker.web};
    sessions.push(session);
    speakers.push(speaker);
  });
  return {
    sessions: sessions,
    speakers: speakers,
    loading: false
  };
};

export { deserialize, selectSession, selectSpeaker };
