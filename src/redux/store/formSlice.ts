import { createSlice } from "@reduxjs/toolkit";

const applicantsData =
  localStorage.getItem("applicantsData") != null
    ? JSON.parse(localStorage.getItem("applicantsData")!)
    : [];

interface initialStateType {
  data: any[];
  loading: boolean;
}

const initialState: initialStateType = {
  data: applicantsData,
  loading: false,
};

const formSlice = createSlice({
  name: "FS",
  initialState: initialState,
  reducers: {
    registerData: (state, action) => {
      const dateString = new Date(action.payload.birthDate).toDateString();
      action.payload.birthDate = dateString;
      state.data.push(action.payload);
      localStorage.setItem(
        "applicantsData",
        JSON.stringify(state.data.map((el) => el))
      );
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
