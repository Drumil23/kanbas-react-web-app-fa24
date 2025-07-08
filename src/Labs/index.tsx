import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";

export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      <p>Welcome to the Labs section of the CS5600 course!</p>
      <Lab1 />
      <Lab2 />
      <Lab3 />
      <br />
      <h2>Course Registration</h2>
      <ol>
        <li>CS5600 - Web Development</li>
        <li>CS5011 - PDP</li>
        <li>CS5010 - Recitation PDP</li>
      </ol>
      <h2>Intake</h2>
      <ul>
        <li>Fall' 25</li>
      </ul>
      {/* <h2>Lab 1</h2>
      <h2>Lab 2</h2>
      <h2>Lab 3</h2> */}
    </div>
  );
}