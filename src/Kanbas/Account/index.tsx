import Signin from "./Signin";
import Signup from "./Signup";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import { Navigate, Link} from "react-router-dom";
import AccountNavigation from "./Navigation";

export default function Account() {
  return (
    <div>
      <h2>Account</h2>
      <br />
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <AccountNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Profile" element={<Profile />} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
