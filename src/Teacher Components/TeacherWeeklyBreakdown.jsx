import { Container } from "@mui/material";
import React from "react";
import TeacherMenu from "./TeacherMenu";

function TeacherWeeklyBreakdown() {
  return (
    <div>
      <TeacherMenu />
      <div
        style={{
          float: "right",
          height: "100vh",
          width: "75%",
          backgroundColor: "#a0e697",
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Week 1</h1>
          <br />

          <ul>
            <li>Due Assignments</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
        </Container>
      </div>
    </div>
  );
}

export default TeacherWeeklyBreakdown;
