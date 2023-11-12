import React from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

export const Home = () => {
  const dispatch = useDispatch();
  const handleCat = (cat) => {
    const type = "ADD_CAT";
    const payload = cat;
    const action = { type, payload };
    dispatch(action);
  };

  return (
    <div>
      <h1>Home Comp</h1>
      <Button onClick={() => handleCat("electronic")} variant="contained">
        Electronic
      </Button>
      <Button variant="contained" onClick={() => handleCat("Kids")}>
        Kids
      </Button>
    </div>
  );
};
