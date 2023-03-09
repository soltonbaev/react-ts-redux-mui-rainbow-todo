import {Grid, Icon, IconButton, Paper, Typography} from '@mui/material';
import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {useAppDispatch} from '../../../redux-store/store';
import {addToDo} from '../../../helpers/CRUD/create';

const AddToDo = () => {
   const dispatch = useAppDispatch();
   return (
      <Grid item lg={3}>
         <Paper elevation={5} sx={{width: '15rem', height: '15rem'}}>
            <IconButton
               onClick={() => {
                  dispatch(addToDo());
               }}
               sx={{width: '100%'}}
            >
               <AddCircleOutlineIcon sx={{fontSize: '12rem'}} />
            </IconButton>
            <Typography sx={{textAlign: 'center', marginBottom: '1rem'}}>
               Add New Note
            </Typography>
         </Paper>
      </Grid>
   );
};

export default AddToDo;
