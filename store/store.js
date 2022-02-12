import { createStore, combineReducers } from "redux";
import bookReducer from "./reducers/bookListReducer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,

}

const rootReducer = combineReducers({
    bookReducer: persistReducer(persistConfig, bookReducer)
})

export const store = createStore(rootReducer);
export const persistor = persistStore(store);