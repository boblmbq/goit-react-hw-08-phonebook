import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import token from 'utils/token';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk(
  'user/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('users/signup', credentials);
      token.set(data.token);

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
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.regectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    await axios.post('users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
    return thunkAPI.regectWithValue(error.message);
  }
});
