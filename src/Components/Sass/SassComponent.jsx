import React, { useState } from "react";
// import sassCss from "../../SassAndScss/sassCss.scss";

function SassComponent() {
  const [name, setName] = useState();
  const [ErrorMsg, setErrorMsg] = useState("");
  const [isError, setIsError] = useState(false);

  const getEnteredName = (e) => {
    setName(e.target.value);
    if (!isNaN(e.target.value)) {
      console.log("inside the error block");
      setIsError(true);
      setErrorMsg("you are not typing in correct way");
    } else {
      console.log("inside the success block");
      setErrorMsg("you are typing correct");
    }
  };
  return (
    <>
      <div className="usingClassName">
        <h1>
          Sass examples{" "}
          <p>
            with nested <span> type styling</span>
            <span className="partials"> and Partial values for border</span>
          </p>
        </h1>
        <p className="modules">
          imported modules from another scss and used in main scss
        </p>
      </div>
      <br />
      <div className="mixins">
        <p className="mixins1">Example for mixins 1 in Scss</p>
        <p className="mixins2">Example for mixins 2 in Scss</p>
        <p className="mixins3">Example for mixins 3 in Scss</p>
      </div>
      <br />

      <div className="extendInheritance">
        <div>
          <input
            size="small"
            type="text"
            name="name"
            id=""
            onChange={(e) => getEnteredName(e)}
          />
        </div>
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <p>Entered Name = {name}</p>
      </div>
      {isError && (
        <span
          className={!isError ? "success" : "error"}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {ErrorMsg}
        </span>
      )}
    </>
  );
}

export default SassComponent;
