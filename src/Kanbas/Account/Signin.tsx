import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // You can add validation or API calls here before redirecting
    navigate("/Kanbas/Dashboard"); // change this path to wherever you want to go
  };

  return (
    <div id="wd-signin-screen">
      <h3>Sign In</h3>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="wd-email" type="email" name="email" required />
        <br />
        <label htmlFor="password">Password:</label>
        <input id="wd-password" type="password" required />
        <br />
        <button id="wd-signin-button" type="button" onClick={handleSignIn}>
          Sign In
        </button>
      </form>
    </div>
  );
}
