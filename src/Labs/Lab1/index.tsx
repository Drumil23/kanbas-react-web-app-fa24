export default function Lab1() {
    return (
        <div>
            <h2>Lab 1</h2>
            <p> Testing Lab 1!</p>

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
            <br />
            
            <label htmlFor="comments">Comments:</label>
            <textarea id="comments" name="comments" rows={1} cols={40}></textarea>
            <h2>Schedule Web Development</h2>
            <label htmlFor="radio-schedule"></label>
            <input type="radio" id="radio-schedule" name="schedule" itemID="monday" /> Monday <br />
            <input type="radio" id="radio-schedule" name="schedule" itemID="tuesday" /> Tuesday <br />
            <input type="radio" id="radio-schedule" name="schedule" itemID="wednesday" /> Wednesday <br />
            <input type="radio" id="radio-schedule" name="schedule" itemID="thursday" /> Thursday <br />
            <input type="radio" id="radio-schedule" name="schedule" itemID="friday" /> Friday <br />
            <input type="radio" id="radio-schedule" name="schedule" itemID="saturday" /> Saturday <br />
            <br />
            <button type="button" onClick={() => alert("Life's good!")}>Button</button>

            <h2 id="wd-checkbox">PDP Schedule</h2>
            <input type="checkbox" name="genre" id="wd-monday" />
            <label htmlFor="wd-monday">Monday</label><br />
            <input type="checkbox" name="genre" id="wd-tuesday" />
            <label htmlFor="wd-tuesday">Tuesday</label><br />
            <input type="checkbox" name="genre" id="wd-wednesday" />
            <label htmlFor="wd-wednesday">Wednesday</label><br />
            <input type="checkbox" name="genre" id="wd-thursday" />
            <label htmlFor="wd-thursday">Thursday</label><br />
            <input type="checkbox" name="genre" id="wd-friday" />
            <label htmlFor="wd-friday">Friday</label><br />
            <input type="checkbox" name="genre" id="wd-saturday" />
            <label htmlFor="wd-saturday">Saturday</label><br />

            <h2>Role</h2>
            <label htmlFor="role">Select your role:</label>
            <select name="role">
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
                <option value="ta">TA</option>
            </select>
            <br />

            <h2>Other tags</h2>
            <label htmlFor="other-tags">Range:</label>
            <input type="range" id="other-tags" min={0} max={100} />
            <br />
            <label htmlFor="hours">Hours:</label>
            <input type="text" id="hours" placeholder="100" defaultValue={101} min={99}/>
            <label htmlFor="email">Mail:</label>
            <input type="email" id="email" placeholder="you@example.com" />
            <br />
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" />
            <br />
        </div>
    );
}
