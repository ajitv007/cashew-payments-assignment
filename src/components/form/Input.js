import React from "react";
import { TextField } from "@material-ui/core";
import { useFormikContext, getIn } from "formik";

export const Input = ({ name, label, variant = "outlined", ...rest }) => {
  const { values, touched, errors, handleChange } = useFormikContext();
  const value = getIn(values, name);
  const touch = getIn(touched, name);
  const error = getIn(errors, name);
  return (
    <TextField
      name={name}
      variant={variant}
      fullWidth
      label={label}
      value={value}
      onChange={handleChange}
      error={touch && Boolean(error)}
      helperText={touch && error}
      {...rest}
    />
  );
};
