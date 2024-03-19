import { Button } from "@mui/material";
import React from "react";

const ChildComp = ({ functionFromParentComp }) => {
  const data = "Hi I am data from child component";
  const passingDataToParent = () => {
    functionFromParentComp(data);
  };
  
  return (
    <>
      <div>ChildComp</div>;
      <Button onClick={passingDataToParent} variant="outlined">
        Click here to pass data from child to parent
      </Button>
    </>
  );
};

export default ChildComp;
