export default function Signup() {
    return (
        <div>
            <h3>Sign Up</h3>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="wd-username" name="username" required />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="wd-email" name="email" required />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="wd-password" name="password" required />
                <br />
                <label htmlFor="wd-confirm-password">Confirm Password:</label>
                <input type="password" id="wd-confirm-password" name="confirm-password" required />
                <br />
                <label htmlFor="wd-date-of-birth">Date of Birth:</label>
                <input type="date" id="wd-date-of-birth" name="date-of-birth" required />
                <br />
                <label htmlFor="wd-role">Role:</label>
                <select id="wd-role" name="role" required>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <br />
                <button id="wd-signup-button" type="submit">Sign Up</button>
            </form>
        </div>
    );
}
