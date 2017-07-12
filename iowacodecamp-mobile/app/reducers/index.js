import { combineReducers } from 'redux';
import {deserialize, selectSession, selectSpeaker} from 'iowacodecamp/utilities/transform';

const initialState = {
    sessions: [],
    speakers: [],
    selectedSession: null,
    selectedSpeaker: null,
    loading: false
};

var all = ((state, action) => {
    if (action.type === 'DESERIALIZE_ALL') {
        return Object.assign({}, state, deserialize(action.response.d));
    }
    if (action.type === 'REFRESH_SESSIONS') {
        return Object.assign({}, state, {loading: true});
    }
    if (action.type === 'SELECT_SPEAKER') {
        return Object.assign({}, state, selectSpeaker(state.speakers, action.speaker));
    }
    if (action.type === 'SELECT_SESSION') {
        return Object.assign({}, state, selectSession(state.sessions, action.session));
    }
    return state || initialState;
});

var scroll = ((state, action) => {
    if (action.type === 'SCROLL') {
        return Object.assign({}, state, {position: action.position});
    }
    return state || {position: 0};
});

export default combineReducers({
    all,
    scroll
});
