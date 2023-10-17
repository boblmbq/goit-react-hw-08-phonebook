import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk(
  'user/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('users/signup', credentials);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.regectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'user/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('users/login', credentials);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.regectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'user/logout',
  async (token, thunkAPI) => {
    try {
      const { data } = await axios.post('users/logout', token);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.regectWithValue(error.message);
    }
  }
);
