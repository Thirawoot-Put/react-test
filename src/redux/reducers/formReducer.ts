import {
  REGISTER_DATA,
  EDIT_DATA,
  DELETE_DATA,
  GET_DATA,
} from "../action/dataActionCreator";

interface initialStateType {
  data: any[];
}

interface EditPayload {
  id: number;
  editData: any;
}

interface reducerAction {
  type: string;
  payload: object;
}

const initialState: initialStateType = {
  data: [],
};

export const formReducer = (state = initialState, action: reducerAction) => {
  switch (action.type) {
    case REGISTER_DATA:
      const newDataArr = [...state.data, action.payload];
      return { data: newDataArr };
    case EDIT_DATA:
      const payload = action.payload as EditPayload;
      const editDataArr = [...state.data].splice(
        payload.id,
        1,
        payload.editData
      );
      console.log(editDataArr);
      return { data: editDataArr };
    case DELETE_DATA:
      const filterDataArr = state.data.filter(
        (data) => data.id != action.payload
      );
      return { data: filterDataArr };
    case GET_DATA:
      return state;
    default:
      return state;
  }
};
