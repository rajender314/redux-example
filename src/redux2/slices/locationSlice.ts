import { createSlice } from '@reduxjs/toolkit';
// const initialState: any = {
//     location: ['Bangalore', 'Hyderabad', 'Delhi'],
//   }
const initialState: any = {
    location: [],
  }
const locationSlice = createSlice({
    name: "location",
    initialState: initialState,
    reducers: {
        getInitialData: (state, param) => {
            const { payload } = param;
            console.log(state.location, payload)
            state.location = [...state.location, ...payload];
        },
        save: (state, param) => {
            const { payload } = param;
            state.location = [...state.location, payload];
        },
        deleteItem : (state, param) => {
            const { payload } = param;
            state.location.splice(payload, 1)
        }
    }
});
// const { actions, reducer } = locationSlice
// export const { save } = actions;
// export default reducer;

export const { getInitialData, save, deleteItem } = locationSlice.actions

export default locationSlice.reducer