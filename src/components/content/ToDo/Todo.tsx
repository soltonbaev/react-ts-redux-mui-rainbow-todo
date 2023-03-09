import {ColorLensSharp} from '@mui/icons-material';
import {Grid, IconButton, Paper, TextField, Typography} from '@mui/material';
import React, {useState} from 'react';
import AddToDoTask from './ToDoTask/AddToDoTask';
import DeleteIcon from '@mui/icons-material/Delete';
import {useAppDispatch} from '../../../redux-store/store';
import {deleteTodo} from '../../../helpers/CRUD/delete';
import {getTodos} from '../../../helpers/CRUD/read';
import {toDoProps} from '../../../helpers/types';
import RenderTasks from './ToDoTask/RenderTasks';
import CheckIcon from '@mui/icons-material/Check';
import {updateTitle} from '../../../helpers/CRUD/update';

const Todo = ({title, color, id}: toDoProps) => {
   const [titleEditMode, setTitleEditMode] = useState(false);
   const [titleValue, setTitleValue] = useState(title);
   const dispatch = useAppDispatch();
   return (
      <Grid item lg={3}>
         <Paper
            elevation={5}
            sx={{
               minHeight: '15rem',
               backgroundColor: color,
               position: 'relative',
               padding: '1rem',
            }}
         >
            {!titleEditMode ? (
               <Typography
                  onClick={() => {
                     setTitleEditMode(true);
                  }}
                  variant="h5"
                  sx={{textAlign: 'center', marginBottom: '1rem'}}
               >
                  {title}
               </Typography>
            ) : (
               <>
                  <TextField
                     size="small"
                     sx={{padding: '0 0 0.5rem'}}
                     value={titleValue}
                     onChange={e => {
                        setTitleValue(e.target.value);
                     }}
                  />
                  <IconButton
                     onClick={() => {
                        dispatch(updateTitle({id: id, title: titleValue}));
                        setTitleEditMode(false);
                     }}
                  >
                     <CheckIcon />
                  </IconButton>
               </>
            )}
            <AddToDoTask todoId={id} />
            <RenderTasks todoId={id} />
            <IconButton
               sx={{position: 'absolute', bottom: '0', right: '0'}}
               onClick={() => {
                  dispatch(deleteTodo(id));
               }}
            >
               <DeleteIcon />
            </IconButton>
         </Paper>
      </Grid>
   );
};

export default Todo;
