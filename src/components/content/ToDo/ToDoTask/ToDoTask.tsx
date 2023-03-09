import {Checkbox, Grid, IconButton, TextField, Typography} from '@mui/material';
import React, {useState} from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {useAppDispatch} from '../../../../redux-store/store';
import {deleteTask} from '../../../../helpers/CRUD/delete';
import {toggleCompleted} from '../../../../helpers/CRUD/update';

const ToDoTask = ({task, id, completed}: any) => {
   const [isCompleted, setIsCompleted] = useState(completed);
   const dispatch = useAppDispatch();
   return (
      <Grid
         item
         sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
         }}
      >
         <Grid
            item
            sx={{
               display: 'flex',

               alignItems: 'center',
            }}
         >
            <Checkbox
               checked={isCompleted}
               onChange={() => {
                  setIsCompleted(!isCompleted);
                  dispatch(toggleCompleted({id: id, status: !completed}));
               }}
            />
            <Typography sx={isCompleted && {textDecoration: 'line-through'}}>
               {task}
            </Typography>
         </Grid>

         <IconButton
            onClick={() => {
               dispatch(deleteTask(id));
            }}
         >
            <HighlightOffIcon />
         </IconButton>
      </Grid>
   );
};

export default ToDoTask;
