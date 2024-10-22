import { combineReducers } from "redux";
import Reducer from "./Reducer";
import ModalReducer from "./Modal";

const AllReducers = combineReducers({
    Reducer: Reducer,
    Modal: ModalReducer
})
export default AllReducers;