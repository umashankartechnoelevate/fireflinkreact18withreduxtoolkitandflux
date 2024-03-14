import { createSlice } from "@reduxjs/toolkit";
import { DeleteAllName } from "../actions";

const hooksSlices = createSlice({
  name: "hook",
  initialState: [],
  reducers: {
    addFakeNames(state, action) {
      state.push(action.payload);
    },
    removeFakeNames(state, action) {
      //you can userdata and here by finding the index of that name you can delete
      // const indexToBeDeleted=state.findIndex(action.payload)
      console.log("index id to be deleted", action.payload);
      state.splice(action.payload, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(DeleteAllName, () => {
      return [];
    });
  },
});
console.log(hooksSlices.reducer);

export { hooksSlices };
export const { addFakeNames, removeFakeNames } = hooksSlices.actions;

//practice

//1 import the createSlice form toolkit
// import {createSlice} from '@reduxjs/toolkit'

//create a slice for chunck of your application
// const slices=createSlice({
//     name:"slice",
//     initialState:[],
//     reducer:{
//         addAction(state,action){} //perform the action what you need there will be multiple action in single slice
//     }
// })

// export {slice}
