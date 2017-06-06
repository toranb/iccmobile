import { route } from 'ember-redux';

const model = dispatch => {
  dispatch({
    type: 'PRE_SESSIONS',
    payload: {},
    meta: {
      offline: {
        effect: {
          url: '/api/sessions',
          method: 'GET'
        },
        commit: {
          type: 'DESERIALIZE_ALL',
          meta: {}
        }
      }
    }
  })
};

export default route({model})();
