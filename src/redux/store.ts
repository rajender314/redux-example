import { configureStore ,applyMiddleware} from "@reduxjs/toolkit";
import  { rootReducer } from './reducer'
import { composeWithDevTools } from "redux-devtools-extension";
// import  thunkMiddleware  from "redux-thunk";
// const composedEnhancer =composeWithDevTools(applyMiddleware(thunkMiddleware))
import { legacy_createStore as createStore } from 'redux';

const store = configureStore({
        reducer: rootReducer,
    }
);

export default store;