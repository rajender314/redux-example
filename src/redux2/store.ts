import { configureStore ,applyMiddleware} from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
// import  thunkMiddleware  from "redux-thunk";
// const composedEnhancer =composeWithDevTools(applyMiddleware(thunkMiddleware))
import { legacy_createStore as createStore } from 'redux';
import locationSlice from "./slices/locationSlice";
const store2 = configureStore({
        reducer: {
            location: locationSlice,
        },
    }
);
// export type RootState = ReturnType<typeof store2.getState>

export default store2;