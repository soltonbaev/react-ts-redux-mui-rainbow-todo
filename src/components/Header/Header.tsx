import {Container, Grid, IconButton, Typography} from '@mui/material';
import {Box} from '@mui/system';
import React from 'react';
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom';
import {addToDo} from '../../helpers/CRUD/create';
import {useAppDispatch} from '../../redux-store/store';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Logo from './Logo';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Header = () => {
   const {pathname} = useLocation();
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   return (
      <Box
         sx={{
            backdropFilter: 'blur(50px)',
            position: 'fixed',
            top: '0',
            zIndex: '1000',
            width: '100%',
         }}
      >
         <Container maxWidth="lg">
            <Grid
               container
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.5rem',
               }}
            >
               <Logo />
               <Grid item sx={{display: 'flex', alignItems: 'center'}}>
                  {pathname === '/' && (
                     <Grid
                        item
                        sx={{
                           display: 'flex',
                           alignItems: 'center',
                           cursor: 'pointer',
                           marginRight: '1rem',
                        }}
                        onClick={() => {
                           dispatch(addToDo());
                        }}
                     >
                        <>
                           <AddCircleOutlineIcon />

                           <Typography>Add New Note</Typography>
                        </>
                     </Grid>
                  )}
                  {pathname === '/' ? (
                     <Grid
                        item
                        sx={{
                           display: 'flex',
                           alignItems: 'center',
                           cursor: 'pointer',
                        }}
                     >
                        <InfoOutlinedIcon></InfoOutlinedIcon>
                        <Link to="/about">About the app</Link>
                     </Grid>
                  ) : (
                     <Grid
                        item
                        sx={{
                           display: 'flex',
                           alignItems: 'center',
                           cursor: 'pointer',
                        }}
                     >
                        <HomeOutlinedIcon></HomeOutlinedIcon>
                        <Link to="/">Back to the lists</Link>
                     </Grid>
                  )}
               </Grid>
            </Grid>
         </Container>
      </Box>
   );
};

export default Header;
