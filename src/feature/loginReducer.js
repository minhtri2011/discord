import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  data: {},
};

const login = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.data = action.payload;
    },
  },
});
const { actions, reducer } = login;

export const { loginSuccess } = actions;

const loginReducer = reducer;
export default loginReducer;
