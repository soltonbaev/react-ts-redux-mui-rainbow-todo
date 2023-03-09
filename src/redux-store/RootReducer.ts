import React from 'react';
import {createAsyncThunk, createSlice, current} from '@reduxjs/toolkit';
import axios from 'axios';
import {TODOS} from '../helpers/consts';
import {GlobalState, Todo} from '../helpers/types';
import {addTask, addToDo, generateRandomColor} from '../helpers/CRUD/create';
import {getTasks, getTodos} from '../helpers/CRUD/read';
import {deleteTask, deleteTodo} from '../helpers/CRUD/delete';
import {toggleCompleted, updateTitle} from '../helpers/CRUD/update';

const initialState: GlobalState = {
   todos: [],
   tasks: [],
   info: {},
   //    notes: [],
   //    type: '',
   //    title: '',
};

export const RootReducer = createSlice({
   name: 'todo_app',
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder.addCase(addToDo.rejected, (state, action) => {
         state.info = {
            switchModalOn: true,
            type: 'error',
            message: 'Unable to add the list. Server or internet down',
         };
      });
      builder.addCase(addToDo.pending, (state, action) => {
         state.info = {
            switchModalOn: true,
            type: 'warning',
            message: 'Adding a list...',
         };
      });
      builder.addCase(addToDo.fulfilled, (state, action) => {
         state.todos.push(action.payload);
         state.info = {
            switchModalOn: false,
            type: 'success',
            message: 'List added',
         };
      });
      builder.addCase(getTodos.fulfilled, (state, action) => {
         state.todos = action.payload;
         state.info = {
            switchModalOn: false,
            type: 'success',
            message: 'Lists loaded successfully...',
         };
      });
      builder.addCase(getTodos.pending, (state, action) => {
         state.info = {
            switchModalOn: true,
            type: 'warning',
            message: 'Please wait while lists are loading...',
         };
      });
      builder.addCase(deleteTodo.fulfilled, (state, action) => {
         state.todos = state.todos.filter(todo => {
            return todo.id !== action.payload;
         });
         console.log(action.payload);
      });
      builder.addCase(updateTitle.fulfilled, (state, action) => {
         state.todos.map(todo => {
            console.log(todo);
            if (todo.id === action.payload.id) {
               todo.title = action.payload.title;
               console.log('todo found!');
            }
         });
      });

      builder.addCase(addTask.fulfilled, (state, action) => {
         state.tasks.push(action.payload);
      });
      builder.addCase(getTasks.fulfilled, (state, action) => {
         state.tasks = action.payload;
      });
      builder.addCase(deleteTask.fulfilled, (state, action) => {
         state.tasks = state.tasks.filter(task => {
            return task.id !== action.payload;
         });
         console.log(action.payload);
      });
      builder.addCase(toggleCompleted.fulfilled, (state, action) => {
         state.tasks.map(task => {
            console.log(task);
            if (task.id === action.payload.id) {
               task.completed = action.payload.completed;
            }
         });
      });
   },
});

export const getInfoObj = (state: any) => state.info;

// export const {addToDo} = RootReducer.actions;
export default RootReducer.reducer;
