import axios from 'axios';
import * as actionTypes from './actionTypes';
export function getAllVehicles() {
  return dispatch => {
    return axios
      .get(`/api/get_all_vehicles`, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => {
        if (response) {
          console.log('Vehicle data ->', response.data);
          dispatch({
            type: actionTypes.GET_ALL_VEHICLES_SUCCESS,
            data: response.data,
          });
          return response;
        } else {
          dispatch({
            type: actionTypes.GET_ALL_VEHICLES_FAILURE,
            data: response.data,
          });
        }
      })
      .catch(err =>
        dispatch({
          type: actionTypes.SERVICE_ERROR,
        })
      );
  };
}
export function getVehicleTrackRecord(VehicleId, startDate, endDate) {
  return dispatch => {
    return axios
      .get(`/api/vehicle_activity?vehicle=${VehicleId}&start_tis=${startDate}&end_tis=${endDate}`, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => {
        if (response) {
          console.log('Vehicle data ->', response.data);
          dispatch({
            type: actionTypes.GET_VEHICLES_TRACK_RECORD_SUCCESS,
            data: response.data && response.data.map(x => ({ lat: parseFloat(x.lat), lng: parseFloat(x.lon) })),
          });
          return response;
        } else {
          dispatch({
            type: actionTypes.GET_VEHICLES_TRACK_RECORD_FAILURE,
            data: response.data,
          });
        }
      })
      .catch(err =>
        dispatch({
          type: actionTypes.SERVICE_ERROR,
        })
      );
  };
}
