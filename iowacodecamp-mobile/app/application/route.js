import route from 'ember-redux/route';
import ajax from 'iowacodecamp/utilities/ajax';

var beforeModel = (dispatch) => {
    return ajax('http://iowacodecamp.com/data/json', 'GET').then(response => dispatch({type: 'DESERIALIZE_ALL', response: response}));
};

export default route({beforeModel})();
