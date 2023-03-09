import {Grid, Typography} from '@mui/material';
import React from 'react';
import {useGlobalState} from '../../../../helpers/CRUD/read';
import AddToDoTask from './AddToDoTask';
import ToDoTask from './ToDoTask';

const RenderTasks = ({todoId}: any) => {
   const {tasks} = useGlobalState();
   return (
      <Grid item sx={{padding: '1rem 1rem 1rem 0'}}>
         {tasks.map(task => {
            // console.log(task.task);
            if (todoId === task.todoId) {
               //    return <Typography>{task.task}</Typography>;
               return (
                  <ToDoTask
                     key={task.id}
                     task={task.task}
                     id={task.id}
                     completed={task.completed}
                  />
               );
            }
         })}
      </Grid>
   );
};

export default RenderTasks;
