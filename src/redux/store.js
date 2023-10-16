import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './operation';
import filterSlice from './filterReducer';

const rootReducer = combineReducers({
  filter: filterSlice,
  [contactsApi.reducerPath]: contactsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
