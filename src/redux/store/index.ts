import { configureStore } from "@reduxjs/toolkit";

import formReducer from "./formSlice";

const store = configureStore({
  reducer: {
    FR: formReducer,
  },
});

export default store;
