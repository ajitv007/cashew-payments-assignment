import React from "react";
import {
  FormControl,
  InputLabel,
  FormHelperText,
  Select,
} from "@material-ui/core";
import { useFormikContext, getIn } from "formik";

export const InputSelect = ({
  name,
  label,
  variant = "outlined",
  children,
  ...rest
}) => {
  const { values, touched, errors, handleChange } = useFormikContext();
  const value = getIn(values, name);
  const touch = getIn(touched, name);
  const error = getIn(errors, name);
  return (
    <FormControl
      variant="outlined"
      style={{ width: "100%" }}
      error={touch && Boolean(error)}
    >
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <Select
        name={name}
        fullWidth
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={value}
        onChange={handleChange}
        label={label}
        {...rest}
      >
        {children}
      </Select>
      {touch && error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};
