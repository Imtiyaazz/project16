import React from "react";
import { navdata } from "./navdata";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <Grid container spacing={2}>
      {navdata.map((item) => (
        <Grid item xs={item.xs}>
          <Link to={item.path}>
            <Button variant="contained" fullWidth>
              {item.title}
            </Button>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};
