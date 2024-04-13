'use client';
import { getDriver, getUser } from '@/Redux/Auth/Action';
import Dashbord from '@/components/Driver/Dashbord';
import Layout from '@/components/Driver/Layout';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const page = () => {
  // const { auth, driver, ride } = useSelector((store) => store);
  // const dispatch = useDispatch();
  // const jwt = localStorage.getItem('jwt');

  // useEffect(() => {
  //   dispatch(getDriver(jwt));
  // }, [jwt]);
  const router = useRouter();
  const auth = useSelector((store) => store.auth);

  useEffect(() => {
    if (!auth?.user?.role || !auth.user?.fullName || !auth.user?.name) {
      router.push('/login');
    }
  }, [auth.user]);

  return (
    <div>
      <Layout Children={<Dashbord />}></Layout>
    </div>
  );
};

export default page;
