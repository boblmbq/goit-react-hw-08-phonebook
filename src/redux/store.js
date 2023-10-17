import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './operation';
import filterSlice from './filterReducer';
import { userReducer } from './userSlice';
const rootReducer = combineReducers({
  filter: filterSlice,
  user: userReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
