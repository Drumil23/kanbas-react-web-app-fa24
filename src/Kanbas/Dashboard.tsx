import { Link } from "react-router";

export default function Dashboard() {
  return (
    <>
      <div id="wd-dashboard">
        <h2>Dashboard</h2>
        <p>Welcome to your Dashboard!</p>
        <p>Here you can find an overview of your activities and updates.</p>
      </div>
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/html.png" alt="HTML Course" />
          <h3>HTML Course</h3>  
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">CS1234</Link>
          <p className="wd-dashboard-course-title">Web Developer at Northeastern</p>
          <Link to={"/Kanbas/Courses/1234/Home"} className="wd-dashboard-course-link">Start</Link>
        </div>
      </div>
    </>
  );
}
