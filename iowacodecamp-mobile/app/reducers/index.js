import {deserialize, selectSession, selectSpeaker} from 'iowacodecamp/utilities/transform';

const initialState = {
    sessions: [],
    speakers: [],
    selectedSession: null,
    selectedSpeaker: null
};

var all = ((state, action) => {
    if (action.type === 'DESERIALIZE_ALL') {
        return Object.assign({}, state, deserialize(action.response.d));
    }
    if (action.type === 'SELECT_SPEAKER') {
        return Object.assign({}, state, selectSpeaker(state.speakers, action.speaker));
    }
    if (action.type === 'SELECT_SESSION') {
        return Object.assign({}, state, selectSession(state.sessions, action.session));
    }
    return state || initialState;
});

export default {
    all
};
