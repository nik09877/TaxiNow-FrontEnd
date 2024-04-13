'use client';
import {
  getAllocatedRides,
  getDriversCurrentRide,
} from '@/Redux/Driver/Action';
import {
  acceptRideAction,
  completeRideAction,
  declineRideAction,
  startRideAction,
} from '@/Redux/Ride/Action';
import { declineRide } from '@/Redux/Ride/ActionCreator';
import { Avatar, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VerifiedIcon from '@mui/icons-material/Verified';
import OTPModal from './OtpModal';

const AllocatedRideCard = ({ ride, type }) => {
  const state = useSelector((store) => store.ride);
  const dispatch = useDispatch();
  const [openOtpModal, setOpenOtpModal] = React.useState(false);
  const handleOtpModalOpen = () => setOpenOtpModal(true);
  const handleOtpModalClose = () => setOpenOtpModal(false);

  const handleDeclineRide = () => {
    //('decline');
    dispatch(declineRideAction(ride?.id));
    dispatch(getAllocatedRides(ride?.id));
  };

  const handleAcceptRide = () => {
    // ('accept');
    dispatch(acceptRideAction(ride?.id));
  };

  const handleCompleteRide = () => {
    //('complete ride');
    dispatch(completeRideAction(ride?.id));
  };

  //'state ', state;

  useEffect(() => {
    if (state.startRide && !state.startRide.error) {
      setOpenOtpModal(false);
    }
  }, [ride]);

  return (
    <>
      <div className='flex justify-between items-center p-3 '>
        <div className='flex items-center'>
          <img
            className='w-20 h-20'
            src='https://cdn.pixabay.com/photo/2017/04/06/22/11/car-2209439_640.png'
            alt=''
          />
          <div className='ml-5 space-y-1'>
            <p className='text-sm font-semibold'>Today 10:08 PM</p>
            <p className='text-xs font-semibold opacity-60'>cab KSLW9983</p>
            <p className='opacity-60 text-xs'>{ride?.pikcupArea}</p>
            <p className='opacity-60 text-xs'>{ride?.destinationArea}</p>
          </div>
        </div>

        {type === 'Allocated' ? (
          <div className='flex flex-col justify-between pl-5 space-y-2'>
            <Button
              onClick={handleAcceptRide}
              className='bg-green-700'
              variant='contained'
              color='success'
            >
              Accept
            </Button>
            <Button
              onClick={handleDeclineRide}
              className='bg-red-600 '
              variant='contained'
              color='error'
            >
              Decline
            </Button>
          </div>
        ) : type == 'Completed' ? (
          <div>
            <VerifiedIcon className='text-green-800 text-6xl' />{' '}
          </div>
        ) : ride?.status == 'STARTED' ? (
          <div>
            <Button
              onClick={handleCompleteRide}
              className='bg-green-700'
              variant='contained'
              color='success'
            >
              Complete
            </Button>
          </div>
        ) : (
          <div>
            <Button
              onClick={handleOtpModalOpen}
              className='bg-green-700'
              variant='contained'
              color='success'
            >
              Start
            </Button>
          </div>
        )}
      </div>
      <OTPModal
        open={openOtpModal}
        handleClose={handleOtpModalClose}
        rideId={ride?.id}
      />
    </>
  );
};

export default AllocatedRideCard;
