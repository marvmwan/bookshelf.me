import { createStore, combineReducers } from "redux";
import bookReducer from "./reducers/bookListReducer";

const rootReducer = combineReducers({
    bookReducer: bookReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;