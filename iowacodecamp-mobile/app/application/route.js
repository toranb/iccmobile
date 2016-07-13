import Ember from 'ember';
import route from 'ember-redux/route';

var beforeModel = (dispatch) => {
    var sessions = Ember.$('[preload-everything]').data('configuration');
    dispatch({type: 'DESERIALIZE_ALL', response: sessions});
};

export default route({beforeModel})();
