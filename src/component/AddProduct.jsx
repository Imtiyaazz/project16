import React from "react";
import { Grid, Button, TextField, Card, CardContent } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const AddProduct = () => {
  const dispatch = useDispatch();

  const [prod, setProd] = useState("");

  const handleSubmit = () => {
    const type = "ADD_PROD";
    const payload = prod;
    const action = { type, payload };
    dispatch(action);
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              onChange={(e) => setProd(e.target.value)}
              fullWidth
              variant="outlined"
              label={"Enter Product Name"}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              onClick={() => handleSubmit()}
              fullWidth
              variant="contained"
              sx={{ height: 55 }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
