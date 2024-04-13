'use client';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { useSelector } from 'react-redux';

// ** Icons Imports
// import TrendingUp from 'mdi-material-ui/TrendingUp'
// import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
// import DotsVertical from 'mdi-material-ui/DotsVertical'
// import CellphoneLink from 'mdi-material-ui/CellphoneLink'
// import AccountOutline from 'mdi-material-ui/AccountOutline'

const renderStats = () => {
  const { auth, driver, ride } = useSelector((store) => store);
  // ('driver completed rides', driver.completedRides);
  const salesData = [
    {
      stats: driver.currentRide ? 1 : 0,
      color: '#F7CD2E',
      title: 'Current',
      icon: 'https://cdn.pixabay.com/photo/2017/04/06/22/11/car-2209439_640.png',
      // icon: <CellphoneLink sx={{ fontSize: '1.75rem' }} />
    },
    // {
    //   stats: '2',
    //   title: 'Cancelled',
    //   color: '#D82E2F',
    //   icon: 'https://cdn.pixabay.com/photo/2017/04/06/22/11/car-2209439_640.png',
    //   // icon: <TrendingUp sx={{ fontSize: '1.75rem' }} />
    // },
    {
      stats: driver.completedRides?.length,
      title: 'Completed',
      color: '#00D84A',
      icon: 'https://cdn.pixabay.com/photo/2017/04/06/22/11/car-2209439_640.png',
      // icon: <AccountOutline sx={{ fontSize: '1.75rem' }} />
    },

    {
      stats: auth.user?.totalRevenue
        ? '₹' + auth.user?.totalRevenue
        : '₹' + '0',
      color: '#5A20CB',
      title: 'Revenue',
      icon: 'data:image/png;base64,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',
    },
  ];

  return salesData.map((item, index) => (
    <Grid item xs={12} sm={3} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        {/* <Avatar
          variant='rounded'
          sx={{
            mr: 3,
            // width: 44,
            height: 44,
            // boxShadow: 3,
            // color: 'common.white',
            // backgroundColor: `${item.color}.main`
          }}
        >
          {item.icon}
        </Avatar> */}
        <img
          className='h-20 w-20 rounded-md content-start mr-5 p-2'
          src={item.icon}
          alt=''
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{ color: item.color }}
            color={item.color}
            className='font-semibold'
          >
            {item.title}
          </Typography>
          <Typography sx={{ color: item.color }}>{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ));
};

const DriversRide = () => {
  return (
    <Card className='w-full'>
      <CardHeader
        title='My Rides'
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important',
            fontWeight: 'bold',
          },
        }}
      />
      <CardContent sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}>
        <Grid container>{renderStats()}</Grid>
      </CardContent>
    </Card>
  );
};

export default DriversRide;
