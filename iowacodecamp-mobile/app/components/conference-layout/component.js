import { connect } from 'ember-redux';
import { getEverything, getLoading } from 'iowacodecamp/reducers/index';

const stateToComputed = (state) => ({
  everything: getEverything(state),
  loading: getLoading(state)
});

const dispatchToActions = dispatch => ({
  refresh: () => dispatch({type: 'REFRESH_SESSIONS', wait: 1000})
});

export default connect(stateToComputed, dispatchToActions)();
