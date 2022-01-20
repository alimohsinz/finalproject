import BookIcon from "@mui/icons-material/Book";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HomeIcon from "@mui/icons-material/Home";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ListIcon from "@mui/icons-material/List";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar, Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    color: "blue",
    fontWeight: "bold",
    fontSize: "large",
  },
});

function TeacherMenu() {
  const classes = useStyles();
  return (
    <div>
      <div
        style={{
          float: "left",
          height: "100vh",
          width: "25%",
          backgroundColor: "#98959c",
        }}
      >
        <Container sx={{ mt: 2 }}>
          <Grid container spacing={1}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item>
              <Avatar
                alt="Ali Mohsin"
                src="/images/ali.jpg"
                sx={{
                  dispaly: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 60,
                  height: 60,

                  mr: 4,
                  ml: 12,
                }}
              />

              <br />
            </Grid>

            <b style={{ marginLeft: "95px" }}>Ali Mohsin</b>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item>
              <HomeIcon
                color="success"
                fontSize="large"
                sx={{ verticalAlign: "middle", mr: 4 }}
              />
              <Link className={classes.link} to="/teacher-home">
                Home
              </Link>
              <br />
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item>
              <BookIcon
                color="success"
                fontSize="large"
                sx={{ verticalAlign: "middle", mr: 4 }}
              />
              <Link className={classes.link} to="/teacher-courses">
                Courses
              </Link>
              <br />
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item>
              <LeaderboardIcon
                color="success"
                fontSize="large"
                sx={{ verticalAlign: "middle", mr: 4 }}
              />
              <Link className={classes.link} to="/teacher-leader-board">
                LeaderBoard
              </Link>
              <br />
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item>
              <CheckCircleOutlineIcon
                color="success"
                fontSize="large"
                sx={{ verticalAlign: "middle", mr: 4 }}
              />
              <Link className={classes.link} to="/teacher-student-progress">
                StudentProgress
              </Link>
              <br />
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item>
              <ListIcon
                color="success"
                fontSize="large"
                sx={{ verticalAlign: "middle", mr: 4 }}
              />
              <Link className={classes.link} to="/teacher-weekly-breakdown">
                WeeklyBreakdown
              </Link>
              <br />
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item>
              <LogoutIcon
                color="success"
                fontSize="large"
                sx={{ verticalAlign: "middle", mr: 4 }}
              />
              <Link to="/login" className={classes.link}>
                Logout
              </Link>
              <br />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default TeacherMenu;
