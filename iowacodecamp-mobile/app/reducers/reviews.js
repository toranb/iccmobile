import { createSelector } from 'reselect';

const initialState = {
  all: {
  }
};

const allReviews = state => state.reviews.all;

export const getReviews = createSelector(
  allReviews,
  (allReviews) => allReviews
);

export default ((state, action) => {
  switch(action.type) {
    case 'RATE_ITEM': {
      const { id, rating } = action;
      const review = {
        [id]: {
          rating: rating
        }
      };
      return {
        ...state,
        all: {...state.all, ...review}
      }
    }
    case 'persist/REHYDRATE': {
      const { payload } = action;
      if (payload && payload.reviews && payload.reviews.all) {
        return Object.assign({}, state, payload.reviews);
      }
      return state;
    }
    default: {
      return state || initialState;
    }
  }
});
