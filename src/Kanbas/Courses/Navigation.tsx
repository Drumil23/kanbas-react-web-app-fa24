import { Link } from "react-router-dom";

export default function CoursesNavigation() {
  return (
    <div id="wd-courses-navigation " className="wd list-group rounded-0 border-0 d-none d-md-block ">
      <Link to="/Kanbas/Courses/1234/Home" className="list-group-item active border-0">Home</Link>
      <Link to="/Kanbas/Courses/1234/Modules" className="list-group-item border-0 text-danger">Modules</Link>
      <Link to="/Kanbas/Courses/1234/Piazza" className="list-group-item border-0 text-danger">Piazza</Link>
      <Link to="/Kanbas/Courses/1234/Zoom" className="list-group-item border-0 text-danger">Zoom</Link>
      <Link to="/Kanbas/Courses/1234/Assignments" className="list-group-item border-0 text-danger">Assignments</Link>
      <Link to="/Kanbas/Courses/1234/Quiz" className="list-group-item border-0 text-danger">Discussions</Link>
      <Link to="/Kanbas/Courses/1234/Grades" className="list-group-item border-0 text-danger">Grades</Link>
      <Link to="/Kanbas/Courses/1234/Peers" className="list-group-item border-0 text-danger">Resources</Link>
    </div>
  );
}
