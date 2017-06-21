import fetch from 'fetch';
import { route } from 'ember-redux';

const model = dispatch => {
  return fetch(`/api/sessions`)
    .then(fetched => fetched.json())
    .then(response => dispatch({
      type: 'DESERIALIZE_ALL',
      response: response
  }));
};

export default route({model})();
