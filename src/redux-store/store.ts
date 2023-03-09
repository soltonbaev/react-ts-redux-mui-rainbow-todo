import {configureStore} from '@reduxjs/toolkit';
import addToDoReducer from './RootReducer';
import {useDispatch} from 'react-redux';

export const store = configureStore({
   reducer: addToDoReducer,
});

// Infer the `RootState` and `AppDispatßch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that
