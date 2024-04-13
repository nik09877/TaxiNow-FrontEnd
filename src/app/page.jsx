'use client';
import React from 'react';
import HomeNavbar from './home-page/HomeNavbar';
import Banner from './home-page/Banner';
import CarVideoSection from './home-page/CarVideoSection';
import Footer from './home-page/Footer';

const page = () => {
  return (
    <div>
      <HomeNavbar />
      <Banner />
      {/*<CarVideoSection />*/}
      <Footer />
    </div>
  );
};

export default page;
