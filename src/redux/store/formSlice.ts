import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  data: any[];
  loading: boolean;
}

const initialState: initialStateType = {
  data: [],
  loading: false,
};

const formSlice = createSlice({
  name: "FS",
  initialState: initialState,
  reducers: {
    registerData: (state, action) => {
      state.data.push(action.payload);
    },
    editData: (state, action) => {
      state.data.splice(action.payload.id, 1, action.payload.editData);
    },
    deleteData: (state, action) => {
      const foundIndex = state.data.findIndex((el) => el.id === action.payload);
      if (foundIndex !== -1) state.data.splice(foundIndex, 1);
    },
  },
});

export const { registerData, editData, deleteData } = formSlice.actions;

const formReducer = formSlice.reducer;
export default formReducer;
