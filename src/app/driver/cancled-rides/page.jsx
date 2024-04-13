import Layout from '@/components/Driver/Layout';
import React, { useEffect } from 'react';
import CancledRides from './CancledRides';
import { useRouter } from 'next/navigation';
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
      <Layout Children={<CancledRides />} />
    </div>
  );
};

export default page;
