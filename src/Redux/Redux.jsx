import React, { useState } from "react";
import { Chance } from "chance";
import { useDispatch, useSelector } from "react-redux";
import { addFakeNames, removeFakeNames } from "../store/slices/hookSlice";

export const Redux = () => {
  const [fakeData, setFakeData] = useState([]);
  const chance = Chance();
  const dispatch = useDispatch();
  const fakeNamesData = useSelector((state) => {
    return state.hooks;
  });

  const fetchFakeData = () => {
    const fakeDataFromChance = chance.name({ middle_initial: true });
    console.log("fake data from chance", fakeDataFromChance);

    setFakeData([...fakeData, fakeDataFromChance]);
    dispatch(addFakeNames(fakeDataFromChance));
  };

  const removeFakeNamesFunction = (id) => {
    dispatch(removeFakeNames(id));
  };

  return (
    <div style={{ padding: "10px 20%" }}>
      <h1>Redux toolkit practice</h1>
      <br />
      <p>fetching fake data from chance npm to display it in UI</p>

      <button onClick={fetchFakeData}>Click here to get fake data</button>
      <br />
      <br />
      <span style={{ background: "yellow" }}>fake data by local state</span>
      <br />
      {fakeData?.map((data, index) => {
        return (
          <>
            <p key={index}>Full Name {data}</p>
          </>
        );
      })}
      <br />
      <span style={{ background: "green", color: "white" }}>
        fake data by redux state
      </span>
      <br />
      <br />
      {fakeNamesData.map((data, index) => {
        return (
          <>
            <div
              style={{
                border: "1px solid blue",
                backgroundColor: "lightgray",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p key={index}>
                {index}. &nbsp; {data}{" "}
                <span
                  onClick={(index) => {
                    removeFakeNamesFunction(index);
                  }}
                  style={{ marginLeft: "30px", fontSize: "25px" }}
                >
                  ⨂
                </span>
              </p>
            </div>
            <br />
          </>
        );
      })}
    </div>
  );
};
