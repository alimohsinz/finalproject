import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Teacher Components/Login";
import NavBar from "./Teacher Components/NavBar";
import TeacherHome from "./Teacher Components/TeacherHome";
import TeacherCourses from "./Teacher Components/TeacherCourses";
import TeacherLeaderBoard from "./Teacher Components/TeacherLeaderBoard";
import TeacherStudentProgress from "./Teacher Components/TeacherStudentProgress";
import TeacherWeeklyBreakdown from "./Teacher Components/TeacherWeeklyBreakdown";
import Home from "./Teacher Components/Home";
import StudentCourses from "./Student Components/StudentCourses";
import StudentHome from "./Student Components/StudentHome";
import StudentLeaderBoard from "./Student Components/StudentLeaderBoard";
import StudentProgress from "./Student Components/StudentProgress";
import StudentWeeklyBreakdown from "./Student Components/StudentWeeklyBreakdown";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/teacher-home" element={<TeacherHome />} />
            <Route path="/teacher-courses" element={<TeacherCourses />} />
            <Route
              path="/teacher-leader-board"
              element={<TeacherLeaderBoard />}
            />
            <Route
              path="/teacher-student-progress"
              element={<TeacherStudentProgress />}
            />
            <Route
              path="/teacher-weekly-breakdown"
              element={<TeacherWeeklyBreakdown />}
            />
            <Route path="/student-home" element={<StudentHome />} />
            <Route path="/student-courses" element={<StudentCourses />} />
            <Route
              path="/student-leader-board"
              element={<StudentLeaderBoard />}
            />
            <Route path="/student-progress" element={<StudentProgress />} />
            <Route
              path="/student-weekly-breakdown"
              element={<StudentWeeklyBreakdown />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
