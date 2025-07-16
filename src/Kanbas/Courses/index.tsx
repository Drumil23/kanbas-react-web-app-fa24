import { Routes, Route, Navigate } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";

export default function Courses() {
  return (
    <div id="wd-courses">
      <h2>Courses</h2>
      <p>Welcome to the Courses section!</p>
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <CoursesNavigation />
            </td>
            <td valign="top">
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Modules" element={<Modules />} />
                    <Route path="/Piazza" element={<div>Piazza Discussions</div>} />
                    <Route path="/Zoom" element={<div>Zoom Meetings</div>} />
                    <Route path="/Assignments" element={<Assignments />} />
                    <Route path="/Quiz" element={<div>Quizzes</div>} />
                    <Route path="/Grades" element={<div>Grades</div>} />
                    <Route path="/Peers" element={<div>Peer Resources</div>} />
                </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}