import { Link } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import { Routes, Route } from "react-router-dom";

export default function Account() {
  return (
    <div>
      <h1>Account</h1>
      <Routes>
        <Route path="Kanbas/Account/Signin" element={<Signin />} />
        <Route path="Kanbas/Account/Signup" element={<Signup />} />
      </Routes>
      <Link to="Kanbas/Account/Signin">Sign In</Link>
      <Link to="Kanbas/Account/Signup">Sign Up</Link>
    </div>
  );
}