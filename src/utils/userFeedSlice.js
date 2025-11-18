import { createSlice } from "@reduxjs/toolkit";


const userFeedSlice=createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addFeed:(state,action)=>action.payload,
        removeFeed:()=>null,
    }
});

export const {addFeed,removeFeed}=userFeedSlice.actions;
export default userFeedSlice.reducer;