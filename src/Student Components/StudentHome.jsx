import React from "react";
import StudentMenu from "./StudentMenu";

function StudentHome() {
  return (
    <div>
      <StudentMenu />
      <div
        style={{
          float: "right",
          height: "100vh",
          width: "75%",
          backgroundColor: "#a0e697",
        }}
      >
        <img
          src="/images/progress.png"
          alt="progress"
          style={{
            width: "300px",
            height: "200px",
            marginTop: "50px",
            marginLeft: "100px",
          }}
        />

        <img
          src="/images/dueassignment.jpg"
          alt="dueassignment"
          style={{
            float: "right",
            width: "300px",
            height: "200px",
            marginTop: "50px",
            marginRight: "100px",
          }}
        />

        <img
          src="/images/assignmentprogress.jpg"
          alt="assignmentprogress"
          style={{
            float: "bottom",
            width: "300px",
            height: "200px",
            marginTop: "50px",
            marginLeft: "100px",
          }}
        />

        <img
          src="/images/dueassignment.jpg"
          alt="dueassignment"
          style={{
            float: "right",
            width: "300px",
            height: "200px",
            marginTop: "50px",
            marginRight: "100px",
          }}
        />
      </div>
    </div>
  );
}

export default StudentHome;
