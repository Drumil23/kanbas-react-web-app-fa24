export default function Profile() {
    return (
        <div>
            <h2>Profile</h2>
            <label htmlFor="username">Username:</label>
            <input type="text" id="wd-username" name="username" required />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="wd-email" name="email" required />  
            <br />
            <label htmlFor="role">Role:</label>
            <select id="wd-role" name="role" required>
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
            <br />
        </div>
    );
}
