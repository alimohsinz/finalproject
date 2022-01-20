import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleButton = () => {
    if (username === "ali" && password === "1234") {
      navigate("/teacher-home");
    }
    if (username === "mohsin" && password === "1234") {
      navigate("/student-home");
    }
  };
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#98959c",
      }}
    >
      <div>
        <img
          src="/images/logo.jpeg"
          alt="Logo"
          style={{
            float: "left",
            width: "60%",
            height: "100vh",
          }}
        />
      </div>
      <div
        style={{
          float: "right",
          width: "40%",
        }}
      >
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={5}></Grid>
            <h1>Login</h1>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}></Grid>
            <Grid item>
              <TextField
                // sx={{ input: { color: "white" } }}

                fullWidth
                color="primary"
                variant="standard"
                label="User Name"
                value={username}
                placeholder="User Name"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}></Grid>
            <br />
            <Grid item xs={4}></Grid>
            <Grid item>
              <TextField
                // sx={{ input: { color: "white" } }}
                fullWidth
                color="primary"
                variant="standard"
                label="Password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}></Grid>
            <br />
            <Grid item xs={12}></Grid>
            <Grid item xs={4}></Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={handleButton}
                color="primary"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Login;
