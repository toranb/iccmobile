import { route } from 'ember-redux';

const model = (dispatch, params) => {
    dispatch({type: 'SELECT_SPEAKER', speaker: params.speaker_id});
};

export default route({model})();
