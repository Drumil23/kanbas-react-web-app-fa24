import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import { Routes, Route } from "react-router";

export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      <p>Welcome to the Labs section of the CS5600 course!</p>
      {/* <Link to="/Labs/Lab1">Lab 1</Link> <br />
      <Link to="/Labs/Lab2">Lab 2</Link> <br />
      <Link to="/Labs/Lab3">Lab 3</Link> <br /> */}
      <Routes>
        <Route path="/Lab1" element={<Lab1 />} />
        <Route path="/Lab2" element={<Lab2 />} />
        <Route path="/Lab3/*" element={<Lab3 />} />
      </Routes>
    </div>
  );
}