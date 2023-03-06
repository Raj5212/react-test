import { ADD_FORM_DATA } from "../actions/formAction";

const initialState = {
    email: "",
    first_name: "",
    last_name: "",
    address1: "",
    address2: "",
    parmanentAddress1: "",
    parmanentAddress2: "",
    date: "",
    fileName: "",
    typeofFile: "",
};

const formReducer = (state = initialState, action) => {

    console.log("payload", action.payload)
  switch (action.type) {
    case ADD_FORM_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;