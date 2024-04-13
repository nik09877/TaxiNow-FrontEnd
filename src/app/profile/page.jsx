'use client';
import Layout from '@/components/User/Layout/Layout';
import Profile from '@/components/User/Profile/Profile';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const page = () => {
  const router = useRouter();
  const auth = useSelector((store) => store.auth);

  useEffect(() => {
    if (!auth.user) {
      router.push('/login');
    }
  }, [auth.user]);

  return (
    <div>
      <Layout children={<Profile />}></Layout>
    </div>
  );
};

export default page;
