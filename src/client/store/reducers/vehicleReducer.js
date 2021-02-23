
import * as actionTypes from '../actions/actionTypes'
const VehicleReducer = (state = { tracksDetails: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_VEHICLES_SUCCESS:
      // console.log(' action action ', action.data.user);
      return {
        ...state,
        vehicles: action.data,
        error: null,
        isLoading: false,
      };
    case actionTypes.GET_ALL_VEHICLES_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
        hasError: action.hasError,
      };
    case actionTypes.GET_VEHICLES_TRACK_RECORD_SUCCESS:
      // console.log(' action action ', action.data.user);
      return {
        ...state,
        vehicleTrack: action.data,
        error: null,
        isLoading: false,
      };
    case actionTypes.GET_VEHICLES_TRACK_RECORD_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
        hasError: action.hasError,
      };
    case actionTypes.SERVICE_ERROR:
      return {
        ...state,
        vehicles: [],
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default VehicleReducer;