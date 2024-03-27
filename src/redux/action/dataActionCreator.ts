// ACTION TYPE
export const REGISTER_DATA: string = "REGISTER_DATA";
export const EDIT_DATA: string = "EDIT_DATA";
export const DELETE_DATA: string = "DELETE_DATA";
export const GET_DATA: string = "GET_DATA";

export const registerData = (data: object) => {
  return {
    type: REGISTER_DATA,
    payload: data,
  };
};

export const editData = (editData: object, id: number) => {
  return {
    type: EDIT_DATA,
    payload: { id, editData },
  };
};

export const deleteData = (id: number) => {
  return {
    type: DELETE_DATA,
    payload: id,
  };
};

export const getData = () => {
  return {
    type: GET_DATA,
  };
};
