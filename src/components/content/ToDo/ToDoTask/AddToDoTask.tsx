import {Grid, IconButton, TextField} from '@mui/material';
import React, {useState} from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {useAppDispatch} from '../../../../redux-store/store';
import {addTask} from '../../../../helpers/CRUD/create';

const AddToDoTask = ({todoId}: any) => {
   const [inpValue, setInpValue] = useState({});
   const dispatch = useAppDispatch();
   return (
      <Grid container>
         <TextField
            size="small"
            name={`${todoId}`}
            onChange={e => {
               console.log(e.target);
               setInpValue({
                  task: e.target.value,
                  todoId: todoId,
                  completed: false,
               });
            }}
            placeholder="Add new task"
         />
         <IconButton
            onClick={() => {
               console.log(inpValue);
               dispatch(addTask(inpValue));
            }}
         >
            <AddCircleOutlineIcon />
         </IconButton>
      </Grid>
   );
};

export default AddToDoTask;
