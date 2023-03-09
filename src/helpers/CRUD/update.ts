import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {TASKS, TODOS} from '../consts';

export const updateTitle = createAsyncThunk(
   'todos/updateTitle',
   async ({id, title}: {id: number; title: string}) => {
      const todoObj = {
         title: title,
      };
      const response = await axios.patch(TODOS + '/' + id, todoObj);
      console.log(response.data);
      return response.data;
   }
);

export const toggleCompleted = createAsyncThunk(
   'tasks/toggleCompleted',
   async ({id, status}: {id: number; status: boolean}) => {
      const taskObj = {
         completed: status,
      };
      const response = await axios.patch(TASKS + '/' + id, taskObj);
      console.log(response.data);
      return response.data;
   }
);
