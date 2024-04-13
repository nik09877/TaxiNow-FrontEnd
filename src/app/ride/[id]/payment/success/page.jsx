'use client';
import React, { useEffect } from 'react';
import Success from './Success';
import Layout from '@/components/User/Layout/Layout';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const page = (props) => {
  const router = useRouter();
  const auth = useSelector((store) => store.auth);

  useEffect(() => {
    if (!auth?.user?.role && !auth.user?.fullName && !auth.user?.name) {
      router.push('/login');
    }
  }, [auth.user]);
  return <Layout children={<Success rideId={props.params.id} />}></Layout>;
};

export default page;
