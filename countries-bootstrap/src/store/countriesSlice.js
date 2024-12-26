import { createSlice } from "@reduxjs/toolkit";

const initialState = {   //can be put in the countriesSlice
    countries:[],
    isLoading: true,
    search:"",
}

export const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {                             // Reducers are used for internal app state management (not from API or remote).
        getCountries (state, action){
            state.countries = action.payload
        },
        isLoading (state, action){
            state.isLoading = action.payload
        },
        search (state, action){
            state.search = action.payload
        }
    },   
    extraReducers() {},                     //Extra reducers are used for Async calls.
   });

    //These are action to be used in components later
   export const {getCountries, isLoading, search} = countriesSlice.actions;
   
   //This is the connection to store.js
   export default countriesSlice.reducer;