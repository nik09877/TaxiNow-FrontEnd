'use client';

import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const CustomSnackBar = ({ duration, handleClose, severity, msg }) => {
  const [open, setOpen] = useState(true);
  return (
    <Snackbar
      open={open}
      // autoHideDuration={duration}
      onClose={() => setOpen(false)}
    >
      <Alert
        severity={severity}
        variant='filled'
        sx={{ width: '100%' }}
        onClose={() => setOpen(false)}
      >
        {msg}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackBar;
// onClose={handleClose}
