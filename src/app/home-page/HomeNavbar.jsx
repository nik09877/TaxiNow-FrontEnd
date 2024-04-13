import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';
import { LOGO_URL } from '@/config/constants';

const HomeNavbar = () => {
  const router = useRouter();
  return (
    <nav className='bg-black py-4'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <div className='flex items-center mx-5'>
              {/*<img
                src='https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ola-white-logo.svg'
                alt='Logo'
                className='w-10 h-10 mr-2'
  />*/}
              <img className='h-8' src={LOGO_URL} alt='' />
            </div>
            <div>
              <ul className='flex items-center'>
                <li className='mr-6'>
                  <a
                    // href=''
                    className='text-white hover:text-blue-200 cursor-pointer'
                    onClick={() => router.push('/book')}
                  >
                    BOOK CAB
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <button
              onClick={() => router.push('/login')}
              className='bg-gray-700 text-white hover:bg-gray-900 text-sm font-semibold px-4 py-3 '
            >
              LOGIN
            </button>
            <button
              className='bg-white text-black hover:bg-gray-300 text-sm font-semibold px-4 py-3 ml-5'
              onClick={() => router.push('/register')}
            >
              REGISTER
            </button>
            {/*<MenuIcon className='ml-5 text-white text-3xl' fontSize='3rem' />*/}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
