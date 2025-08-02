import { Link, useLocation } from "react-router";
import { FaUserGraduate } from "react-icons/fa";
import { TfiDashboard } from "react-icons/tfi";
import { GrBook } from "react-icons/gr";
import { TbCalendarSmile } from "react-icons/tb";
import { BsMailboxFlag } from "react-icons/bs";
import { ImLab } from "react-icons/im";
import { icon } from "@fortawesome/fontawesome-svg-core";

export default function KanbasNavigation() {
  const {pathname} = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: <TfiDashboard className="fs-2 text-danger" /> },
    { label: "Account", path: "/Kanbas/Account", icon: <FaUserGraduate className="fs-2 text-danger" /> },
    { label: "Courses", path: "/Kanbas/Courses/:cid/*", icon: <GrBook className="fs-2 text-danger" /> },
    { label: "Calendar", path: "/Kanbas/Calendar", icon: <TbCalendarSmile className="fs-2 text-danger" /> },
    { label: "Inbox", path: "/Kanbas/Inbox", icon: <BsMailboxFlag className="fs-2 text-danger" /> },
    { label: "Labs", path: "/Labs", icon: <ImLab className="fs-2 text-danger" /> },
  ];

  return (
    <div className="bottom-0 top-0 position-fixed d-none d-lg-block list-group border-0 bg-black rounded-0" id="wd-kanbas-navigation" style={{ width: "135px"}}>
        <a className="border-0 text-center list-group-item bg-black text-white" href="https://www.northeastern.edu/">Northeastern</a>
        {/* <Link className="border-0 text-center list-group-item bg-black text-white" to="/Kanbas/Dashboard" id="wd-dashboard"> <TfiDashboard className="fs-2 text-danger" /> <br /> Dashboard</Link>
        <Link className="border-0 text-center list-group-item bg-white text-danger" to="/Kanbas/Account" id="wd-account"><FaUserGraduate className="fs-2 text-danger" /> <br /> Account </Link>
        <Link className="border-0 text-center list-group-item bg-black text-white" to="/Kanbas/Courses/:cid/*" id="wd-courses"><GrBook className="fs-2 text-danger" /> <br /> Courses</Link> */}
        {/* <Link to="/Kanbas/Courses" id="wd-courses">Courses</Link> */}
        {/* <Link className="border-0 text-center list-group-item bg-black text-white" to="/Kanbas/Calendar" id="wd-calendar"><TbCalendarSmile className="fs-2 text-danger" /> <br /> Calendar</Link>
        <Link className="border-0 text-center list-group-item bg-black text-white" to="/Kanbas/Inbox" id="wd-inbox"><BsMailboxFlag className="fs-2 text-danger" /> <br /> Inbox</Link>
        <Link className="border-0 text-center list-group-item bg-black text-white" to="/Labs" id="wd-labs"><ImLab className="fs-2 text-danger" /> <br /> Labs</Link> */}
        {links.map((link, index) => (
          <Link 
            key={index} 
            to={link.path} 
            className={`border-0 text-center list-group-item ${pathname.startsWith(link.path) ? 'bg-white text-danger' : 'bg-black text-white'}`}
          >
            {link.icon}
            <br />
            {link.label}
          </Link>
        ))}
    </div>
    );
}