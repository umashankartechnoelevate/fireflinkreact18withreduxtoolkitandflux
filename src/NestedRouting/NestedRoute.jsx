import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const NestedRoute = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid
        container
        fullWidth
        sx={{
          background: "gray",
          padding: "10px 0px 0px 0px",
        }}
      >
        <Grid item lg={2} xs={12} md={4} sm={6}>
          <Typography sx={{ color: "white" }} onClick={() => navigate("/")}>
            Home
          </Typography>
        </Grid>
        <Grid item lg={2} xs={12} md={4} sm={6} sx={{ color: "white" }}>
          <Typography onClick={() => navigate("/nested/sass")}>Sass</Typography>
        </Grid>
        <Grid item lg={2} xs={12} sm={6} md={4} sx={{ color: "white" }}>
          <Typography onClick={() => navigate("/nested/redux")}>
            Redux
          </Typography>
        </Grid>
        <Grid item lg={2} xs={12} sm={6} md={4} sx={{ color: "white" }}>
          <Typography onClick={() => navigate("/nested/flux")}>Flux</Typography>
        </Grid>
        <Grid item lg={2} xs={12} sm={6} md={4} sx={{ color: "white" }}>
          <Typography onClick={() => navigate("/nested/materialUI")}>
            Material UI
          </Typography>
        </Grid>
        <Grid item lg={2} sm={6} md={4} xs={12} sx={{ color: "white" }}>
          <Button
            onClick={() => navigate("/nested/tailwind")}
            variant="outlined"
            sx={{ border: "1px solid blue", color: "white" }}
          >
            TailWind
          </Button>
        </Grid>
      </Grid>
      <br />
      <br />
      <Outlet />
    </>
  );
};

export default NestedRoute;
