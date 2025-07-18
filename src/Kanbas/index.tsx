import { Navigate, Route, Routes } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";

export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <h1>Kanbas</h1>
      <p>Welcome to the Kanbas section!</p>
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <KanbasNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route path="/" element={<Navigate to="Account" />} />
                <Route path="/Account/*" element={<Account />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Courses/:courseId/*" element={<Courses />} />
                <Route path="/Calendar" element={<div>Calendar</div>} />
                <Route path="/Inbox" element={<div>Inbox</div>} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>  
  );
}