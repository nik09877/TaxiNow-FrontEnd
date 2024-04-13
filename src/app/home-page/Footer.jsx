import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useRouter } from 'next/navigation';
import { LOGO_URL } from '@/config/constants';

const Footer = () => {
  const router = useRouter();

  return (
    <footer className='mt-40 '>
      <div className='container mx-auto py-8'>
        <div className='grid grid-cols-1 md:flex justify-around'>
          <div className='footer-links'>
            <img
              src={LOGO_URL}
              style={{ objectFit: 'cover', height: 70 }}
              alt=''
            />
            <div className='flex items-center mt-5'>
              <InstagramIcon className='' style={{ fontSize: 40 }} />
              <YouTubeIcon className='ml-5' style={{ fontSize: 40 }} />
              <TwitterIcon className='ml-5' style={{ fontSize: 40 }} />
            </div>
          </div>
          <div className='footer-links'>
            <h3 className='text-lg font-semibold'>Explore</h3>
            <ul className='mt-4'>
              <li>
                <a
                  onClick={() => router.replace('/')}
                  className='text-gray-400 hover:text-black cursor-pointer'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => router.push('/book')}
                  className='text-gray-400 hover:text-black cursor-pointer'
                >
                  Book a Ride
                </a>
              </li>
              <li>
                <a
                  onClick={() => router.replace('/')}
                  className='text-gray-400 hover:text-black cursor-pointer'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  onClick={() => router.replace('/')}
                  className='text-gray-400 hover:text-black cursor-pointer'
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className='footer-links'>
            <h3 className='text-lg font-semibold'>Customer Support</h3>
            <ul className='mt-4'>
              <li>
                <a
                  onClick={() => router.replace('/')}
                  className='text-gray-400 hover:text-black cursor-pointer'
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  onClick={() => router.replace('/')}
                  className='text-gray-400 hover:text-black cursor-pointer'
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  onClick={() => router.replace('/')}
                  className='text-gray-400 hover:text-black cursor-pointer'
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className='footer-links'>
            <h3 className='text-lg font-semibold'>Legal</h3>
            <ul className='mt-4'>
              <li>
                <a
                  onClick={() => router.replace('/')}
                  className='text-gray-400 hover:text-black cursor-pointer'
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  onClick={() => router.replace('/')}
                  className='text-gray-400 hover:text-black cursor-pointer'
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-gray-800 py-4'>
        <div className='container mx-auto'>
          <p className='text-center text-gray-400 text-sm'>
            &copy; {new Date().getFullYear()} TaxiNow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
