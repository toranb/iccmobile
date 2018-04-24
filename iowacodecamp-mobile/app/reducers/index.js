import { combineReducers } from 'redux';
import { deserialize } from 'iowacodecamp/utilities/transform';
import { createSelector } from 'reselect';

const initialState = {
  sessions: [],
  speakers: [],
  selectedSession: null,
  selectedSpeaker: null,
  loading: false
};

const all = ((state, action) => {
  if (action.type === 'DESERIALIZE_ALL') {
    return Object.assign({}, state, deserialize(action.response.d));
  }
  if (action.type === 'persist/REHYDRATE') {
    const { payload } = action;
    if (payload && payload.all) {
      return Object.assign({}, state, payload.all);
    }
    return state;
  }
  if (action.type === 'REFRESH_SESSIONS') {
    return {
      ...state,
      loading: true
    }
  }
  if (action.type === 'REFRESH_FAILED') {
    return {
      ...state,
      loading: false
    }
  }
  return state || initialState;
});

const sessions = state => state.all.sessions;
const loading = state => state.all.loading;

export const getLoading = createSelector(
  loading,
  (loading) => loading
);

export const getEverything = createSelector(
  sessions,
  (sessions) => {
    const models = [];
    sessions.forEach((session) => {
      const time = session.time;
      const found = models.find((model) => {
        return model.time === time;
      });
      if(!found) {
        models.push({time: time, sessions: []});
      }
      const filteredByTime = models.filter((item) => {
        return item.time === time;
      });
      filteredByTime[0].sessions.push(session);
    });
    return models;
  }
);

export default combineReducers({
  all
});
