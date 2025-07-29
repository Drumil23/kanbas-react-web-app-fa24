import { FaPlus } from "react-icons/fa6";
import GreenTick from "./GreenTick"; // Use GreenTick as per our previous discussion

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">

      {/* Existing "Module" button (red) */}
      <button className="btn btn-lg btn-danger ms-2 float-end"> {/* Added ms-2 for space from other buttons */}
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>

      {/* Your "Publish All" dropdown (grey) */}
      <div className="dropdown d-inline float-end"> {/* Removed me-1 to allow gap from the next button */}
        <button
          className="btn btn-lg btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          <GreenTick /> {/* Using GreenTick */}
          Publish All
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              <GreenTick />
              Publish all modules and items
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <GreenTick />
              Publish modules only
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}