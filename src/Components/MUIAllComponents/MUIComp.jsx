import React, { useState } from "react";
import { Input } from "../ReusableComponentsByMUI/input/Input";

export const MUIComp = () => {
  const [data, setData] = useState();
  console.log("entered data", data);

  //   reusable input with mapping
  const inputKeys = [
    {
      name: "firstName",
      label: "Enter here",
      variant: "outlined",
      size: "small",
      disabled: false,
      defaultValue: "",
      helperText: "",
      fullWidth: false,
      placeholder: "",
      type: "",
    },
    // {
    //   name: "lastName",
    //   label: "",
    //   variant: "",
    //   size: "",
    //   disabled: false,
    //   defaultValue: "",
    //   helperText: "",
    //   fullWidth: false,
    //   placeholder: "",
    //   type: "",
    // },
    // {
    //   name: "age",
    //   label: "",
    //   variant: "",
    //   size: "",
    //   disabled: false,
    //   defaultValue: "",
    //   helperText: "",
    //   fullWidth: false,
    //   placeholder: "",
    //   type: "",
    // },
    // {
    //   name: "birthDate",
    //   label: "",
    //   variant: "",
    //   size: "",
    //   disabled: false,
    //   defaultValue: "",
    //   helperText: "",
    //   fullWidth: false,
    //   placeholder: "",
    //   type: "",
    // },
    // {
    //   name: "education",
    //   label: "",
    //   variant: "",
    //   size: "",
    //   disabled: false,
    //   defaultValue: "",
    //   helperText: "",
    //   fullWidth: false,
    //   placeholder: "",
    //   type: "",
    // },
    // {
    //   name: "maritalStatus",
    //   label: "",
    //   variant: "",
    //   size: "",
    //   disabled: false,
    //   defaultValue: "",
    //   helperText: "",
    //   fullWidth: false,
    //   placeholder: "",
    //   type: "",
    // },
  ];

  return (
    <div style={{ padding: "5px 10px" }}>
      <span style={{ marginRight: "50px" }}>1 . TextField Component</span>
      <Input
        label="filled"
        variant="outlined"
        size="small"
        onChange={(e) => setData(e.target.value)}
        disabled={false}
        defaultValue="Umashankar"
        helperText={"please enter your name"}
        fullWidth={false}
        placeholder={"enter your name"}
        type={"Date"}
      />
      {inputKeys.map((inputs) => {
        return (
          <>
            <Input
              label={inputs.label}
              variant={inputs?.variant}
              size={inputs?.size}
            //   onChange={(e) => setData(e.target.value)}
            //   disabled={inputs?.disabled}
            //   defaultValue={inputs?.defaultValue}
            //   helperText={inputs?.helperText}
            //   fullWidth={inputs?.fullWidth}
            //   placeholder={inputs?.placeholder}
            //   type={inputs?.type}
            />
          </>
        );
      })}
    </div>
  );
};
