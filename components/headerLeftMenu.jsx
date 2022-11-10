import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function headerLeftMenu(){

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center',  textAlign: 'center', height: 70, width: '50vw' }}>
        <Typography sx={{ minWidth: 100 }}><Link href="#" underline="none" color="inherit">Shop</Link></Typography>
        <Typography sx={{ minWidth: 100 }}><Link href="#" underline="none" color="inherit">Makers</Link></Typography>
        <Typography sx={{ minWidth: 100 }}><Link href="#" underline="none" color="inherit">Journal</Link></Typography>
        <Typography sx={{ minWidth: 100 }}><Link href="#" underline="none" color="inherit">About</Link></Typography>
      </Box>
    </>
  );
}