import { createStore } from "redux";
import formReducer from "./redux/reducres/index";

const store = createStore(formReducer);

export default store;