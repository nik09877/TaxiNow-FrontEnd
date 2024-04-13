'use client';
import React, { useEffect, useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, getUser, registerUser } from '@/Redux/Auth/Action';
import { LOGO_URL, SEVERITY } from '@/config/constants';
import CustomSnackBar from '../snackbar/CustomSnackBar';

const Register = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');
  const auth = useSelector((store) => store.auth);

  const [signupData, setSignupData] = useState({
    fullName: '',
    email: '',
    password: '',
    mobile: '+91',
  });

  ' auth ----- ', auth;

  const goBack = () => {
    dispatch(clearError());
    router.back();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignupData((preValue) => ({ ...preValue, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUser(signupData));
  };

  useEffect(() => {
    //'jwt --- ', jwt;
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  useEffect(() => {
    if (auth.user?.fullName || auth.user?.name) {
      router.push('/book');
    }
  }, [auth.user]);

  return (
    <>
      {auth.error && (
        <CustomSnackBar
          duration={1500}
          severity={SEVERITY.ERROR}
          msg={auth.error}
        />
      )}
      <div>
        <div className='flex items-center px-2 lg:px-5 py-2'>
          <WestIcon onClick={goBack} className='cursor-pointer' />
          {/* <img className="text-center w-full font-bold text-xl">Login</img> */}
          <div className='w-full  flex justify-center'>
            <img
              style={{ height: 80 }}
              className='h-10'
              src={LOGO_URL}
              alt=''
            />
          </div>
        </div>
        <form onSubmit={onSubmit} className='h-full p-5'>
          <TextField
            label='User Name'
            variant='outlined'
            fullWidth
            margin='normal'
            name='fullName'
            onChange={handleChange}
          />
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
            name='password'
            onChange={handleChange}
          />
          <TextField
            label='Mobile Number'
            type='tel'
            variant='outlined'
            fullWidth
            margin='normal'
            name='mobile'
            onChange={handleChange}
          />
          <Button
            className='w-full'
            variant='contained'
            type='submit'
            color='secondary'
            sx={{ padding: '.9rem 0rem' }}
          >
            Register
          </Button>
        </form>

        <div className='flex flex-col w-full items-center justify-center space-y-2'>
          <p className='flex items-center mt-5 text-center'>
            If you have already account ?
            <Button
              onClick={() => {
                dispatch(clearError());
                router.push('login');
              }}
              className='ml-5'
              color='secondary'
            >
              Login
            </Button>
          </p>
          <p className='flex items-center mt-5 text-center'>
            Register as driver
            <Button
              onClick={() => {
                dispatch(clearError());
                router.push('/driver/register');
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

export default Register;
