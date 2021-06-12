import React from "react";
import { Link, Typography } from "@material-ui/core";

export const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
       Aji Varghese
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
