import { Link, Route, Routes } from "react-router";
import Account from "./Account";
import Signin from "./Account/Signin";
import Signup from "./Account/Signup";

export default function Kanbas() {
  return (
    <div>
      <h1>Kanbas</h1>
      <p>Welcome to the Kanbas section!</p>
      < Account />
      {/* <Routes>
        <Route path="/Kanbas/Account" element={<Account />} />
        <Route path="/Kanbas/Account/Signin" element={<Signin />} />
        <Route path="/Kanbas/Account/Signup" element={<Signup />} />
      </Routes> */}
    </div>
  );
}