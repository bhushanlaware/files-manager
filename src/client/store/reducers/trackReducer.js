
import * as actionTypes from '../actions/actionTypes'
const TrackReducer = (state = { tracksDetails: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PLACE_INTERACTIONS_SUCCESS:
      console.log(' action action ', action.data.user);
      return {
        ...state,
        tracksDetails: action.data,
        error: null,
        isLoading: false,
      };
    case actionTypes.GET_PLACE_INTERACTIONS_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
        hasError: action.hasError,
      };
    case actionTypes.SERVICE_ERROR:
      return {
        ...state,
        userDetails: [],
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default TrackReducer;