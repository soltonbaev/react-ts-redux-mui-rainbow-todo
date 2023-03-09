import {Box, Grid} from '@mui/material';
import React from 'react';
import {useNavigate} from 'react-router-dom';

const Logo = () => {
   const navigate = useNavigate();
   return (
      <>
         <Grid
            item
            sx={{
               cursor: 'pointer',
               fontSize: '2.5rem',
            }}
            onClick={() => {
               navigate('/');
            }}
         >
            <Box
               component="div"
               sx={{
                  display: 'inline',
                  color: '#a855cc',
                  textShadow:
                     '-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000',
               }}
            >
               R
            </Box>
            <Box
               component="div"
               sx={{
                  display: 'inline',
                  color: '#a072c2',
                  textShadow:
                     '-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000',
               }}
            >
               A
            </Box>
            <Box
               component="div"
               sx={{
                  display: 'inline',
                  color: '#7979f7',
                  textShadow:
                     '-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000',
               }}
            >
               I
            </Box>
            <Box
               component="div"
               sx={{
                  display: 'inline',
                  color: '#78f378',
                  textShadow:
                     '-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000',
               }}
            >
               N
            </Box>
            <Box
               component="div"
               sx={{
                  display: 'inline',
                  color: '#ffff80',
                  textShadow:
                     '-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000',
               }}
            >
               B
            </Box>
            <Box
               component="div"
               sx={{
                  display: 'inline',
                  color: '#f5b779',
                  textShadow:
                     '-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000',
               }}
            >
               O
            </Box>
            <Box
               component="div"
               sx={{
                  display: 'inline',
                  color: '#f77c7c',
                  textShadow:
                     '-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000',
               }}
            >
               W
            </Box>
            <Box component="span" sx={{paddingLeft: '1rem'}}>
               Lists
            </Box>
         </Grid>
      </>
   );
};

export default Logo;
