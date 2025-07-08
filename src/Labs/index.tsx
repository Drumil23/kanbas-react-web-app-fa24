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
      <table bgcolor="#f0f0f1" border={2} width="20%">
        <thead>
          <tr>
            <th>Course</th>
            <th>Credits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CS5600</td>
            <td>4</td>
          </tr>
          <tr>
            <td>CS5011</td>
            <td>0</td>
          </tr>
          <tr>
            <td>CS5010</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
      {/* <h2>Lab 1</h2>
      <h2>Lab 2</h2>
      <h2>Lab 3</h2> */}
    </div>
  );
}