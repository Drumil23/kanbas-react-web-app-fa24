import { Link } from "react-router";
import * as db from "./Database";
export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1>Dashboard</h1><hr />
      <h2>Published Courses ({courses.length})</h2><hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course, index) => (
            <div className="wd-dashboard-course col" key={index} style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark" to={`/Kanbas/Courses/${course._id}/Home`}>
                  <img src="./images/html.png" width="105%" height={140} alt={`${course.name} Course`} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                    <p className="wd-dashboard-course-title card-text">{course.number}</p>
                    <p className="wd-dashboard-course-title card-text">{course.description}</p>
                    <button className="btn btn-primary">Start</button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    );
  }