// actions.js

import axios from 'axios';
import {
  REQUEST_RIDE,
  REQUEST_RIDE_SUCCESS,
  REQUEST_RIDE_FAILURE,
} from './ActionType';
import { api } from '@/config/api';
import {
  acceptRide,
  acceptRideFailure,
  acceptRideSuccess,
  declineRide,
  declineRideFailure,
  declineRideSuccess,
  findRideByIdFailure,
  findRideByIdRequest,
  findRideByIdSuccess,
  finishRideSuccess,
  searchFailure,
  searchRequest,
  searchSuccess,
  startRide,
  startRideFailure,
  startRideSuccess,
} from './ActionCreator';

export const requestRide = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: REQUEST_RIDE });

    try {
      const { data } = await api.post(`/ride/request`, reqData.location);

      //'data --- ', data;

      dispatch({
        type: REQUEST_RIDE_SUCCESS,
        payload: data,
      });
      // if (data.id) {
      //   // reqData.router.push(`/ride-detail/${data.id}`);
      // }
    } catch (error) {
      dispatch({
        type: REQUEST_RIDE_FAILURE,
        payload: error.response.data.error ?? error.message,
      });
    }
  };
};

export const findRideById = (id) => {
  return async (dispatch) => {
    dispatch(findRideByIdRequest(null));
    try {
      const { data } = await api.get(`/ride/${+id}`);
      dispatch(findRideByIdSuccess(data));

      // 'ride details - ', data;
    } catch (error) {
      dispatch(findRideByIdFailure(error.response.data.error ?? error.message));
    }
  };
};

export const acceptRideAction = (id) => {
  return async (dispatch) => {
    dispatch(acceptRide());
    try {
      const { data } = await api.put(`/ride/${+id}/accept`);
      dispatch(acceptRideSuccess(data));

      //'decline - ', data;
    } catch (error) {
      dispatch(acceptRideFailure(error.response.data.error ?? error.message));
    }
  };
};

export const declineRideAction = (id) => {

  // ('decline ride action');
  return async (dispatch) => {
    dispatch(declineRide());
    try {
      const { data } = await api.put(`/ride/${+id}/decline`);
      dispatch(declineRideSuccess(data));

      // 'decline - ', data;
    } catch (error) {
      dispatch(declineRideFailure(error.response.data.error ?? error.message));
    }
  };
};

export const startRideAction = (req) => {
  //('start ride action');

  return async (dispatch) => {
    dispatch(startRide());
    try {
      const { data } = await api.put(`/ride/${+req.id}/start`, req.data);
      dispatch(startRideSuccess(data));

      //'start ride - ', data;
    } catch (error) {
      dispatch(startRideFailure(error.response.data.error ?? error.message));
    }
  };
};

export const completeRideAction = (id) => {
  // ('complete ride action');

  return async (dispatch) => {
    // dispatch(startRide());
    try {
      const { data } = await api.put(`/ride/${id}/complete`);
      dispatch(finishRideSuccess(data));

      // 'finish ride - ', data;
    } catch (error) {
      // dispatch(startRideFailure(error.message));
      dispatch(startRideFailure(error.response.data.error ?? error.message));
      error.catch;
    }
  };
};

// export const currentRideAction = (id) => {
//   ("current ride action")

//   return async (dispatch) => {
//     dispatch(currentRide());
//     try {
//       const { data } = await api.get(`/drivers/${+id}/current_ride`);
//       dispatch(currentRideSuccess(data));

//       ("current ride - ",data)
//     } catch (error) {
//       dispatch(currentRideFailure(error.message));
//     }
//   };
// };

export const searchLocation = (query) => {
  return async (dispatch) => {
    dispatch(searchRequest());

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${query}`;

    try {
      const response = await axios.get(url);
      // 'search result -- ', response.data;
      dispatch(searchSuccess(response.data));
    } catch (error) {
      dispatch(searchFailure(error.message));
    }
  };
};
