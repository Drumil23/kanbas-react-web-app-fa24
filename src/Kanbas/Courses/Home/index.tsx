import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div>
      <h2>Course Home</h2>
      <table>
        <tbody>
          <tr>
            <td valign="top"><Modules /></td>
            <td valign="top"><CourseStatus /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
