import { Link } from "react-router";
import { FaUserGraduate } from "react-icons/fa";
import { TfiDashboard } from "react-icons/tfi";
import { GrBook } from "react-icons/gr";
import { TbCalendarSmile } from "react-icons/tb";
import { BsMailboxFlag } from "react-icons/bs";
import { ImLab } from "react-icons/im";

export default function KanbasNavigation() {
  return (
    <div className="bottom-0 top-0 position-fixed d-none d-lg-block list-group border-0 bg-black rounded-0" id="wd-kanbas-navigation" style={{ width: "135px"}}>
        <a className="border-0 text-center list-group-item bg-black text-white" href="https://www.northeastern.edu/">Northeastern</a>
        <Link className="border-0 text-center list-group-item bg-black text-white" to="/Kanbas/Dashboard" id="wd-dashboard"> <TfiDashboard className="fs-2 text-danger" /> <br /> Dashboard</Link>
        <Link className="border-0 text-center list-group-item bg-white text-danger" to="/Kanbas/Account" id="wd-account"><FaUserGraduate className="fs-2 text-danger" /> <br /> Account </Link>
        <Link className="border-0 text-center list-group-item bg-black text-white" to="/Kanbas/Courses/:cid/*" id="wd-courses"><GrBook className="fs-2 text-danger" /> <br /> Courses</Link>
        {/* <Link to="/Kanbas/Courses" id="wd-courses">Courses</Link> */}
        <Link className="border-0 text-center list-group-item bg-black text-white" to="/Kanbas/Calendar" id="wd-calendar"><TbCalendarSmile className="fs-2 text-danger" /> <br /> Calendar</Link>
        <Link className="border-0 text-center list-group-item bg-black text-white" to="/Kanbas/Inbox" id="wd-inbox"><BsMailboxFlag className="fs-2 text-danger" /> <br /> Inbox</Link>
        <Link className="border-0 text-center list-group-item bg-black text-white" to="/Labs" id="wd-labs"><ImLab className="fs-2 text-danger" /> <br /> Labs</Link>

    </div>
    );
}