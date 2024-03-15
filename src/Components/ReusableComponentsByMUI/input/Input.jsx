import React from "react";
import TextField from "@mui/material/TextField";

export const Input = ({
  size,
  label,
  variant,
  disabled,
  defaultValue,
  inputProps,
  InputLabelProps,
  helperText,
  autoFocus,
  color,
  fullWidth,
  onChange = () => {},
  placeholder,
  type,
}) => {
  return (
    <>
      <TextField
        size={size}
        label={label}
        variant={variant}
        disabled={disabled}
        defaultValue={defaultValue}
        inputProps={inputProps}
        InputLabelProps={InputLabelProps}
        helperText={helperText}
        autoFocus={autoFocus}
        color={color}
        fullWidth={fullWidth}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
    </>
  );
};
