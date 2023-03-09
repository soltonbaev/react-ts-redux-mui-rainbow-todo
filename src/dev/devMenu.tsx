import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {RootState, useAppDispatch} from '../redux-store/store';
import {useSelector, useDispatch} from 'react-redux';
import {addToDo} from '../helpers/CRUD/create';
import {getTasks, getTodos, useGlobalState} from '../helpers/CRUD/read';
import {useLocation, useParams} from 'react-router-dom';

export default function DevMenu() {
   const location = useLocation();
   const {tasks, todos} = useGlobalState();
   const dispatch = useAppDispatch();

   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
   const open = Boolean(anchorEl);
   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   const [inpValue, setInpValue] = React.useState('');

   return (
      <div
         style={{
            position: 'fixed',
            bottom: '0',
            right: '0',
            backgroundColor: 'orange',
            zIndex: '6000',
         }}
      >
         <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={e => handleClick(e)}
         >
            DevMenu
         </Button>
         <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               'aria-labelledby': 'basic-button',
            }}
            sx={{zIndex: '7000'}}
         >
            <MenuItem
               onClick={() => {
                  dispatch(addToDo());
                  //   console.log(addToDo('test'));
               }}
            >
               Add data to reducer
            </MenuItem>
            <MenuItem
               onClick={() => {
                  //   dispatch(addToDo(123));
                  console.log(todos);
               }}
            >
               Read global state
            </MenuItem>
            <MenuItem
               onClick={() => {
                  //   dispatch(addToDo(123));
                  console.log(todos);
               }}
            >
               Read todos from state
            </MenuItem>
            <MenuItem
               onClick={() => {
                  //   dispatch(addToDo(123));
                  console.log(tasks);
               }}
            >
               Read tasks from state
            </MenuItem>
            <MenuItem
               onClick={() => {
                  dispatch(getTodos());
               }}
            >
               Get all todos
            </MenuItem>
            <MenuItem
               onClick={() => {
                  dispatch(getTasks());
               }}
            >
               Get all todos
            </MenuItem>
            <MenuItem
               onClick={() => {
                  console.log(location);
               }}
            >
               Get current page route
            </MenuItem>
            {/* <MenuItem
               onClick={async () => {
                  console.log('Get current user', user);
               }}
            >
               Get current user profile
            </MenuItem>
            <MenuItem
               onClick={() => {
                  console.log('Get access token', getAccessConfig());
               }}
            >
               Get Access Token
            </MenuItem>
            <MenuItem
               onClick={async () => {
                  console.log(params);
                  console.log(
                     'Get question based a slug',

                     await getQuestion(inpValue)
                  );
               }}
            >
               Get question based on a slug
            </MenuItem>
            <MenuItem
               onClick={async () => {
                  console.log(
                     'Get answer based on id',
                     await getAnswer(inpValue)
                  );
               }}
            >
               Get answer based on id
            </MenuItem>
            <MenuItem
               onClick={async () => {
                  console.log(
                     'Get similar questions',
                     await getSimilarQuestions(params.id)
                  );
               }}
            >
               Get Similar Questions
            </MenuItem>

            <MenuItem
               onClick={() => {
                  console.clear();
               }}
            >
               CLEAR CONSOLE
            </MenuItem> */}
            <center>
               <input
                  placeholder="universal input"
                  value={inpValue}
                  onChange={e => {
                     setInpValue(e.target.value);
                  }}
               ></input>
            </center>
         </Menu>
      </div>
   );
}
