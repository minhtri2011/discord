import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "feature/loginReducer";

// const rootReducer=combineReducers({

// })

const store = configureStore({
  devTools: true,
  reducer: {
    loginReducer,
  },
});
export default store;
