export default function CourseAssignments() {
  return (
    <div>
      <div>
        <input type="text" placeholder="Search for Assignments" />
        <button>+ Group</button>
        <button>+ Assignment</button>
      </div>

      <h2>
        ASSIGNMENTS 40% of Total <button>+</button>
      </h2>

      <ul>
        <li>
          {/* <a href="#">A1 - ENV + HTML</a> */}
          <a>A1 - ENV + HTML</a>
          <div>
            Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am | <br />
            <strong>Due</strong> May 13 at 11:59pm | 100 pts
          </div>
        </li>

        <li>
          {/* <a href="#">A2 - CSS + BOOTSTRAP</a> */}
          <a>A2 - CSS + BOOTSTRAP</a>

          <div>
            Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am | <br />
            <strong>Due</strong> May 20 at 11:59pm | 100 pts
          </div>
        </li>

        <li>
          {/* <a href="#">A3 - JAVASCRIPT + REACT</a> */}
          <a>A3 - JAVASCRIPT + REACT</a>

          <div>
            Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am | <br />
            <strong>Due</strong> May 27 at 11:59pm | 100 pts
          </div>
        </li>
      </ul>
    </div>
  );
}
