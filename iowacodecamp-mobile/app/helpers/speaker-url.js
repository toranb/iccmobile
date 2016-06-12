import Ember from 'ember';

export default Ember.Helper.helper((params) => {
    return "http://iowacodecamp.com/public/images/speakers/" + params[0];
});
