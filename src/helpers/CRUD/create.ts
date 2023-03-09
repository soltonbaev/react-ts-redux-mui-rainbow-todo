import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {TASKS, TODOS} from '../consts';

export {};

export function generateRandomColor() {
   let colorChoice;
   let hexes = [
      ' #CC99FF',
      '#A9D1F7',
      '#B4F0A7',
      '#FFFFBF',
      ' #FFDFBE',
      '#FFB1B0',
   ];

   colorChoice = hexes[Math.floor(Math.random() * hexes.length)];
   return colorChoice;
}

export const addToDo = createAsyncThunk('todos/addToDo', async () => {
   const toDoObj = {
      title: 'New Todo List',
      color: generateRandomColor(),
   };
   const response = await axios.post(TODOS, toDoObj);
   console.log(response.data);
   return response.data;
});

export const addTask = createAsyncThunk(
   'tasks/addTask',
   async (taskObj: any) => {
      const response = await axios.post(TASKS, taskObj);
      console.log(response.data);
      return response.data;
   }
);
