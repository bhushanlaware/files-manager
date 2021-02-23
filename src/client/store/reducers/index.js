import { combineReducers } from 'redux';
import TrackReducer from './trackReducer';
import VehicleReducer from './vehicleReducer';

const rootReducer = combineReducers({
  TrackReducer,
  VehicleReducer,
});

export default rootReducer;
