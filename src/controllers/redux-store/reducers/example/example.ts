import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import RequestService from '../../../../framework-drivers/request-service';
import { ReqestStatusTypeEnum, type RestResponseType } from '../../../../framework-drivers/request-service/request-service.type';

interface testReturnType {
  example: RestResponseType<string>,
};

// initial state
const initialState: testReturnType = {
  example: {
    content: null,
    type: ReqestStatusTypeEnum.INITIAL,
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
        type: ReqestStatusTypeEnum.PENDING,
      };
    },
    [thunkFunction.fulfilled.type]: (state, action) => {
      state.example = {
        type: ReqestStatusTypeEnum.SUCCESS,
        content: 'test',
      };
    },
    [thunkFunction.rejected.type]: (state, action) => {
      state.example = {
        type: ReqestStatusTypeEnum.ERROR,
        errorText: 'This is test request',
      };
    },
  },
});

export default testsSlice;
