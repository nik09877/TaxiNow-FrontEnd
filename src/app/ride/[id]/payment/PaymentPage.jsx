import { findRideById } from '@/Redux/Ride/Action';
// import { generatePaymentLink } from '@/Redux/User/Action';
import AllocatedRideCard from '@/components/Driver/AllocatedRideCard';
// import RideDetails from '@/components/User/RideDetails/RideDetails';
import { convertMillisecondsToMinutesAndHours } from '@/config/methods/milisecondToTime';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Razorpay from 'razorpay';
import { api } from '@/config/api';
import swal from 'sweetalert';

const PaymentPage = ({ rideId }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const ride = useSelector((store) => store.ride);

  useEffect(() => {
    dispatch(findRideById(rideId));
  }, [rideId]);

  // const handleCreatePaymentLink = () => {
  //   if (rideId) {
  //     dispatch(generatePaymentLink(rideId));
  //   }
  // };

  const handlePayment = async () => {
    const { data } = await api.post(`/payments/${+rideId}`);
    const orderId = data.orderId;

    const options = {
      key: 'rzp_test_95DiSWWcUUVxjG',
      amount: Math.round(ride.rideDetails?.fare) * 100,
      currency: 'INR',
      name: ride.rideDetails?.user?.name,
      description: 'Test Transaction',
      image: 'https://www.svgrepo.com/show/261072/rupee.svg',
      order_id: orderId,
      handler: function (response) {
        swal(
          'Payment Successfull!',
          `Your Payment Id is : ${res.razorpay_payment_id}`,
          'success'
        );

        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: ride.rideDetails?.user?.name,
        email: ride.rideDetails?.user?.email,
        contact: ride.rideDetails?.user?.mobile,
      },
      notes: {
        address: ride.rideDetails?.destinationArea,
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp1 = new Razorpay(options);

    rzp1.on('payment.failed', function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();
  };
  // 'time hours',
  //   convertMillisecondsToMinutesAndHours(8249),
  //   ride.rideDetails?.duration;

  return (
    <div className='px-20 flex flex-col justify-center h-[99vh] border '>
      <div className='shadow-2xl py-2 px-3 border-2 border-gray-300 rounded-md mb-3'>
        <AllocatedRideCard type={'Completed'} ride={ride.rideDetails} />
      </div>
      <div className='border border-slate-600 rounded-md p-5 bg-slate-900 text-white'>
        <p className='text-center text-xl font-semibold py-2'>
          Payment Details
        </p>

        <div className='flex justify-between py-2 items-center'>
          <p className='font-semibold opacity-60'>Total Fare</p>
          <p className='text-blue-700 font-semibold'>
            ₹{ride.rideDetails?.fare}
          </p>
        </div>
        <div className='flex justify-between py-2 items-center'>
          <p className='font-semibold opacity-60'>Distance</p>
          <p className='text-blue-700 font-semibold'>
            {ride.rideDetails?.distance}
          </p>
        </div>
        <div className='flex justify-between py-2 items-center'>
          <p className='font-semibold opacity-60'>Duration</p>
          <p className='text-blue-700 font-semibold'>
            {convertMillisecondsToMinutesAndHours(ride.rideDetails?.duration)}
          </p>
        </div>
        <div className='flex justify-between py-2 items-center'>
          <p className='font-semibold opacity-60'>Ride Id</p>
          <p className='text-blue-700 font-semibold'>{ride.rideDetails?.id}</p>
        </div>

        <div className='mt-5'>
          <Button
            onClick={handlePayment}
            variant='contained'
            color='secondary'
            className='w-full'
          >
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
