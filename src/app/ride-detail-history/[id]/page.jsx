'use client';
import Layout from '@/components/User/Layout/Layout';
import RideDetails from '@/components/User/RideDetails/RideDetails';
import RideDetailsHistory from '@/components/User/RideDetails/RideDetailsHistory';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const page = (props) => {
  const auth = useSelector((store) => store.auth);
  const router = useRouter();

  useEffect(() => {
    if (!auth.user) {
      router.push('/login');
    }
  }, [auth.user]);

  return (
    <div>
      <Layout
        children={<RideDetailsHistory rideId={props.params.id} />}
      ></Layout>
    </div>
  );
};

export default page;
