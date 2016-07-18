import Ember from 'ember';

export default Ember.Helper.helper((params) => {
    var image = params[0];
    return image ? "/images/" + image : "/images/default.png";
});
