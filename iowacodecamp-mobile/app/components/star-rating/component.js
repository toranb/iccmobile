import Component from '@ember/component';
import { htmlSafe } from '@ember/string';
import { computed } from '@ember/object';
import { connect } from 'ember-redux';
import { getReviews } from 'iowacodecamp/reducers/reviews';

const stateToComputed = (state) => ({
  reviews: getReviews(state)
});

const dispatchToActions = dispatch => ({
  rate: (id, rating, event) => {
    dispatch({type: 'POST_RATING', payload: {id, rating}});
    event.stopPropagation();
  }
});

const StarRating = Component.extend({
  stars: computed(function() {
    return [1, 2, 3, 4, 5];
  }),
  width: computed('reviews', function() {
    const { id } = this.session;
    const reviews = this.reviews;
    const review = reviews && reviews[id];
    const stars = review ? (review.rating / 5) * 100 : 0;
    return htmlSafe(`width: ${stars}%`);
  })
});

export default connect(stateToComputed, dispatchToActions)(StarRating);
