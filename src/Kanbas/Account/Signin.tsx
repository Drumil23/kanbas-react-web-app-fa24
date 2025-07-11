export default function Signin() {
    return (
        <div>
        <h1>Sign In</h1>
        <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <br />
            <button type="submit">Sign In</button>
        </form>
        </div>
    );
}