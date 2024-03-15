// import { useEffect, useState } from "react";
// import dispatcher from "../Dispatcher";
// import actionTypes from "./actionTypes";
// import axios from "axios";
import ADD_TODO from "./actionTypes";
import DELETE_TODO from "./actionTypes";
import dispatcher from "../Dispatcher";

// export const FluxActions = () => {
//   const [localState, setLocalState] = useState();

//   //   const fetchDataFromJson = async () => {
//   //     try {
//   //       const fetchedData = await axios.get(
//   //         "https://jsonplaceholder.typicode.com/users"
//   //       );
//   //       console.log("fetched data", fetchedData);
//   //       setLocalState(fetchedData);
//   //     } catch (err) {
//   //       console.log("error in fetching json placeholder data");
//   //     }
//   //   };

//   //   useEffect(() => {
//   //     fetchDataFromJson();
//   //   }, []);

//   dispatcher.dispatch({
//     actionTypes: actionTypes.GEt_POSTS,
//     posts: localState,
//   });

//   return <></>;
// };

//it is directely used dispatcher setup
// export const addToDO = (text) => ({
//   type: ADD_TODO,
//   text
// });

//it is for seperate dispatcher comp
export const addToDo = (text) => {
  dispatcher.dispatch({
    type: ADD_TODO,
    text,
  });
};

export const deleteTodo = (id) => {
  console.log("delete id in post action", id);
  dispatcher.dispatch({
    type: DELETE_TODO,
    id,
  });
};
