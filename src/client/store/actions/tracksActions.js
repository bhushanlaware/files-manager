import axios from 'axios';
import * as actionTypes from './actionTypes';
export function getVehiclesForTime(startDate, endDate) {
  return dispatch => {
    return axios
      .get(`/api/place_interactions?start_tis=${startDate}&end_tis=${endDate}`, {
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
          console.log('Tracking data ->', response.data);
          dispatch({
            type: actionTypes.GET_PLACE_INTERACTIONS_SUCCESS,
            data: response.data &&
              response.data.map(x => ({
                ...x,
                time: new Date(x.time),
                licenseNumber: x.vehicle.license,
                cordinates: `${x.lat} ${x.lon}`
              })),
          });
          return response;
        } else {
          dispatch({
            type: actionTypes.GET_PLACE_INTERACTIONS_FAILURE,
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
