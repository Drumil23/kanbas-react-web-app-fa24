import BootstrapGrids from "./BootstrapGrids";
import Dimensions from "./Dimensions";
import Flex from "./Flex";
import GridLayout from "./GridLayout";
import "./index.css";
import ReactIcons from "./ReactIcons";
export default function Lab2() {
    return (
        <div id="wd-lab2">
            <h2 className="fg-color-green">Lab 2</h2>
            <p className="fg-color-blue" > Cascading Style Sheets (CSS)</p>
            <br />
            <span style={{ backgroundColor: "lightgray", color: "brown", padding: "3px", border: "3px dashed green" }}>Khoury College </span>
            <span style={{ backgroundColor: "lightgray", color: "brown", padding: "3px", border: "3px solid blue" }}>of Computer Science</span>
            <p id="lab2-paragraph-1" >I'm on video Module-3</p>
            <p id="lab2-paragraph-2">Styling Web Applications </p>
            <Dimensions />
            <GridLayout />
            <Flex />
            <ReactIcons />
            <BootstrapGrids />
        </div>
    );
}