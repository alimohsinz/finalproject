import { AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";

const usestyles = makeStyles((theme) => ({
  link: {
    color: "white",
    padding: "5px",
    textDecoration: "none",
  },
}));

const TopMenu = () => {
  const classes = usestyles();
  return (
    <div>
      <AppBar position="static" color="primary" style={{ height: "55px" }}>
        <Toolbar>
          <Typography variant="h6">
            <Link to="/" className={classes.link}>
              HOME
            </Link>
          </Typography>

          <Typography variant="h6">
            <Link to="/contect-us" className={classes.link}>
              ABOUT
            </Link>
          </Typography>

          <Typography variant="h6">
            <Link to="/login" className={classes.link}>
              LOGIN
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/teacher-home" className={classes.link}>
              TEACHER
            </Link>
          </Typography>

          <Typography variant="h6">
            <Link to="/student-home" className={classes.link}>
              STUDENT
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopMenu;
