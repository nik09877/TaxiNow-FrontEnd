import { api } from '@/config/api';
import {
  allocatedRideFailure,
  allocatedRideRequest,
  allocatedRideSuccess,
  completedRideSuccess,
  getCurrentRideFailure,
  getCurrentRideRequest,
  getCurrentRideSuccess,
} from './ActionCreator';

export const getDriversCurrentRide = (id) => async (dispatch) => {
  dispatch(getCurrentRideRequest());

  try {
    const response = await api.get(`/driver/current_ride`);
    const ride = response.data;
    //'current ride - ', ride;
    dispatch(getCurrentRideSuccess(ride));
  } catch (error) {
    dispatch(getCurrentRideFailure(error.response.data.error ?? error.message));
  }
};

export const getAllocatedRides = (id) => async (dispatch) => {
  dispatch(allocatedRideRequest());

  try {
    const response = await api.get(`/driver/allocated`);
    const ride = response.data;
   // 'allocated ride - ', ride;
    dispatch(allocatedRideSuccess(ride));
  } catch (error) {
    dispatch(allocatedRideFailure(error.response.data.error ?? error.message));
  }
};

export const getDriversCompletedRide = () => async (dispatch) => {
  dispatch(getCurrentRideRequest());

  try {
    const response = await api.get(`/driver/rides/completed`);
    const ride = response.data;
  //  'completed ride - ', ride;
    dispatch(completedRideSuccess(ride));
  } catch (error) {
    dispatch(getCurrentRideFailure(error.response.data.error ?? error.message));
  }
};
