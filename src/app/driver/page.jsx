'use client';

import Driver from '@/components/Driver/Driver';
import Layout from '@/components/Driver/Layout';
import { useRouter } from 'next/navigation';
// import Layout from '@/components/Layout/Layout'
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const page = () => {
  // const router = useRouter();
  // const auth = useSelector((store) => store.auth);

  // useEffect(() => {
  //   if (!auth?.user?.role || !auth.user?.fullName || !auth.user?.name) {
  //     router.push('/login');
  //   }
  // }, [auth.user]);

  return (
    <div>
      {/* <Layout children={}> </Layout>
       */}
      {/* <Driver/> */}
      <Layout></Layout>
    </div>
  );
};

export default page;
