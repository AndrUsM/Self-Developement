import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import RequestService from '../../../../framework-drivers/request-service';

interface testReturnType {
  example: {
    status: string;
    data: object;
    error: object;
  },
};

// initial state
const initialState: testReturnType = {
  example: {
    status: 'iddle',
    data: {},
    error: {},
  },
};

// First, create the thunk
const thunkFunction = createAsyncThunk(
  'test/example',
  async (parameter, thunkApi) => {
    const requestService = new RequestService();
    const response = await requestService.get<testReturnType>('users-example', {});
    return response;
  }
);

// Then, handle actions in your reducers
const testsSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    set: (state, action) => {
      state = {
        ...state,
        example: action.payload
      };
    }
  },
  extraReducers: {
    [thunkFunction.pending.type]: (state, action) => {
      state.example = {
        status: 'loading',
        data: {
          manga: 'test',
        },
        error: {},
      };
    },
    [thunkFunction.fulfilled.type]: (state, action) => {
      state.example = {
        status: 'loaded',
        data: {
          manga: 'test',
        },
        error: {},
      };
    },
    [thunkFunction.rejected.type]: (state, action) => {
      state.example = {
        status: 'loaded',
        data: {},
        error: {
          text: 'Error data loading',
        },
      };
    },
  },
});

export default testsSlice;
