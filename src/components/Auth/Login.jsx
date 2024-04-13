'use client';
import React, { useEffect, useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import WestIcon from '@mui/icons-material/West';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, getDriver, getUser, login } from '@/Redux/Auth/Action';
import Typography from '@mui/material/Typography';
import { LOGO_URL, SEVERITY } from '@/config/constants';
import CustomSnackBar from '../snackbar/CustomSnackBar';

const Login = () => {
  const [signinData, setSigninData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const router = useRouter();
  const goBack = () => {
    dispatch(clearError());
    router.back();
  };
  const jwt = localStorage.getItem('jwt');
  const auth = useSelector((store) => store.auth);
  console.log(jwt, auth);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSigninData((preValue) => ({ ...preValue, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //'signin data - - - ', signinData;
    dispatch(login(signinData));
  };

  useEffect(() => {
    // ('jwt --- ', jwt);
    if (jwt) {
      // dispatch(getDriver(jwt));
      // dispatch(getUser(jwt));
      if (auth.user?.type) {
        if (auth.user.type === 'DRIVER') {
          dispatch(getDriver(jwt));
        } else dispatch(getUser(jwt));
      }
    }
  }, [jwt, auth.user]);

  useEffect(() => {
    if (auth.user?.fullName || auth.user?.name) {
      if (auth.user.role === 'DRIVER') {
        router.push('/driver/dashbord');
      } else router.push('/book');
    }
  }, [auth.user]);

  return (
    <>
      {auth.error && (
        <CustomSnackBar
          open={true}
          duration={1500}
          severity={SEVERITY.ERROR}
          msg={auth.error}
        />
      )}
      <div className='py-10'>
        <div className='flex items-center px-2 lg:px-5 py-2'>
          <WestIcon onClick={goBack} className='cursor-pointer' />
          {/* <img className="text-center w-full font-bold text-xl">Login</img> */}
          <div className='w-full  flex justify-center'>
            <img
              className='h-14'
              style={{ height: 80 }}
              src={LOGO_URL}
              alt=''
            />
          </div>
        </div>
        <form onSubmit={handleSubmit} className='z-50 h-full p-5'>
          <TextField
            label='Email'
            type='email'
            variant='outlined'
            fullWidth
            margin='normal'
            name='email'
            onChange={handleChange}
          />
          <TextField
            label='Password'
            type='password'
            variant='outlined'
            fullWidth
            margin='normal'
            onChange={handleChange}
            name='password'
          />

          <Button
            sx={{ padding: '.9rem 0rem' }}
            variant='contained'
            className='z-10  w-full'
            type='submit'
            color='secondary'
          >
            Login
          </Button>
        </form>
        <div className='flex w-full justify-center'>
          <p className='flex items-center mt-5 text-center'>
            Don't Have Account Register ?
            <Button
              onClick={() => {
                dispatch(clearError());
                router.push('register');
              }}
              className='ml-5'
              color='secondary'
            >
              Register
            </Button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
