import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../redux-store/store';
import {TASKS, TODOS} from '../consts';

export const getTodos = createAsyncThunk('todos/getTodos', async () => {
   const response = await axios.get(TODOS);
   console.log(response.data);
   return response.data;
});

export const getTasks = createAsyncThunk('tasks/getTasks', async () => {
   const response = await axios.get(TASKS);
   console.log(response.data);
   return response.data;
});

export const useGlobalState = () => {
   return useSelector((state: RootState) => {
      return state;
   });
};
