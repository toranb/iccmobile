const deserialize = function(response) {
  const sessions = [];
  const speakers = [];
  response.data.forEach(function(data) {
    const session_id = btoa(data.session);
    const speaker_id = btoa(data.speaker.name);
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

export { deserialize };
