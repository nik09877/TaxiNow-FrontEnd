'use client';
import Layout from '@/components/User/Layout/Layout';
import Rides from '@/components/User/Ride/Rides';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const page = () => {
  const router = useRouter();
  const auth = useSelector((store) => store.auth);

  useEffect(() => {
    if (!auth?.user?.role || !auth.user?.fullName || !auth.user?.name) {
      router.push('/login');
    }
  }, [auth.user]);

  return (
    <div>
      <Layout children={<Rides />} />
    </div>
  );
};

export default page;
