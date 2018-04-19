import { route } from 'ember-redux';

const model = dispatch => {
  dispatch({type: 'REFRESH_SESSIONS'});
};

export default route({model})();
