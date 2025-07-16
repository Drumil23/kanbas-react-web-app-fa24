import { Link } from "react-router";

export default function KanbasNavigation() {
  return (
    <div id="wd-navigation">
        <a href="https://www.northeastern.edu/">Northeastern</a><br />
        <Link to="/Kanbas/Dashboard" id="wd-dashboard">Dashboard</Link><br />
        <Link to="/Kanbas/Account" id="wd-account">Account</Link><br />
        <Link to="/Kanbas/Courses/:cid/*" id="wd-courses">Courses</Link><br />
        {/* <Link to="/Kanbas/Courses" id="wd-courses">Courses</Link><br /> */}
        <Link to="/Kanbas/Calendar" id="wd-calendar">Calendar</Link><br />
        <Link to="/Kanbas/Inbox" id="wd-inbox">Inbox</Link><br />
        <Link to="/Labs" id="wd-labs">Labs</Link><br />

    </div>
    );
}