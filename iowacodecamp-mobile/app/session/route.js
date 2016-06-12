import route from 'ember-redux/route';

var model = (dispatch, params) => {
    dispatch({type: 'SELECT_SESSION', session: params.session_id});
};

export default route({model})();
