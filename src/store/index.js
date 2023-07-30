import todoReducer from "./reducers/todoReducers"
import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';


const persistConfig = {
    key: "todo",
    storage
};

const rootReducer = combineReducers({
    todo: todoReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = createStore(persistedReducer,applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
