import Ember from 'ember';

export default Ember.Helper.helper((params) => {
    return "/images/" + params[0];
});
