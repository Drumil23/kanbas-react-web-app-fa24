import { Link } from "react-router";

export default function Dashboard() {
  return (
    //     <>
    //       <div id="wd-dashboard">
    //         <h2>Dashboard</h2>
    //         <p>Welcome to your Dashboard!</p>
    //         <p>Here you can find an overview of your activities and updates.</p>
    //       </div>
    //       <div id="wd-dashboard-courses">
    //         <div className="wd-dashboard-course">
    //           <img src="/images/html.png" alt="HTML Course" />
    //           <h3>HTML Course</h3>  
    //           <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">CS1234</Link>
    //           <p className="wd-dashboard-course-title">Web Developer at Northeastern</p>
    //           <Link to={"/Kanbas/Courses/1234/Home"} className="wd-dashboard-course-link">Start</Link>
    //         </div>
    //       </div>
    //     </>
    //   );
    // }

    <div id="wd-dashboard">
      <h1>Dashboard</h1><hr />
      <h2>Published Courses (12)</h2><hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                <img src="/images/html.png" width="105%" height={140} alt="HTML Course" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1234 HTML</h5>
                  <p className="wd-dashboard-course-title card-text">Web Developer at Northeastern</p>
                  <button className="btn btn-primary">Start</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                <img src="/images/css.png" width="105%" height={140} alt="CSS Course" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1234 CSS</h5>
                  <p className="wd-dashboard-course-title card-text">Web Developer at Northeastern</p>
                  <button className="btn btn-primary">Start</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    );
  }