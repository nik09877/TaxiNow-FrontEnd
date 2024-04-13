'use client';
import React, { useEffect } from 'react';
import PaymentPage from './PaymentPage';
import Layout from '@/components/User/Layout/Layout';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const page = (props) => {
  const router = useRouter();
  const auth = useSelector((store) => store.auth);

  useEffect(() => {
    if (!auth.user) {
      router.push('/login');
    }
  }, [auth.user]);
  // 'ride id --- ', props.params.id;
  return <Layout children={<PaymentPage rideId={props.params.id} />}></Layout>;
};

export default page;
