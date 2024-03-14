import { configureStore } from "@reduxjs/toolkit";
import { hooksSlices } from "./slices/hookSlice";

const store=configureStore({
    reducer:{
        //you can all reducers here and it will work a combine reducer
        hooks:hooksSlices.reducer,

    }
})

export default store


//practice 
// import { configureStore } from "@reduxjs/toolkit";

// const practiceStore=configureStore({
//     reducer:{
//         //here we can add all defined slices to get then inside the store
//     }
// })

// export default practiceStore;