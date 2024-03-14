import React from "react";

export const Interview = () => {
  let demoData = [
    {
      title: "big news",
      desc: "We are going to display an big news display please be here",
    },
    {
      Title: "breaking news news",
      desc: "We are going to display an breaking display please be here",
    },
  ];

  let crosses = ["*", "0", "*", "*", "0", "0"];
  return (
    <div className="App">
      <h1>Welcome Daily hunt</h1>

      <p>Breaking news</p>
      {demoData.map((data) => {
        return (
          <>
            <h2>{data.title}</h2>
            <p>{data.desc}</p>
          </>
        );
      })}

      {/* <h1>tic tac toe</h1> */}

      {/* <div column={12}>
      {crosses.map((cross, index) => {
        return (
          <div key={index} column={4}>
            {cross}
          </div>
        );
      })}
    </div> */}
    </div>
  );
};
