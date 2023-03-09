import {Masonry} from '@mui/lab';
import {Container, Grid} from '@mui/material';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {getTasks, getTodos, useGlobalState} from '../../helpers/CRUD/read';
import {RootState, useAppDispatch} from '../../redux-store/store';
import AddToDo from './ToDo/AddToDo';
import Todo from './ToDo/Todo';

const Home = () => {
   const dispatch = useAppDispatch();
   const globalState = useGlobalState();
   useEffect(() => {
      dispatch(getTodos());
      dispatch(getTasks());
   }, []);

   return (
      <Container maxWidth="lg" sx={{minHeight: '50vh', marginTop: '5rem'}}>
         <Masonry columns={{xs: 1, sm: 2, md: 3, lg: 4}} spacing={2}>
            {globalState.todos.map(todo => {
               return (
                  <Todo
                     key={todo.id}
                     title={todo.title}
                     color={todo.color}
                     id={todo.id}
                  />
               );
            })}
         </Masonry>
         {/* <AddToDo /> */}
      </Container>
   );
};

export default Home;
