
import laundryDuckLogo from "../assets/Laundry Duck Logo.png"
import "../styles/Login.css"

function Login() {
  return (
    <main className="loginPage">
      <div className="loginCard">
        <img src={laundryDuckLogo} alt="LaundryDuck Logo" />
        <h1>Welcome Back!</h1>
        <p>Log in to your LaundryDuck account.</p>

        <form>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" placeholder="Enter your email" required />

          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Enter your password" required />

          <button type="submit">Log In</button>
        </form>

        <p className="registerText">
          Don't have an account? <a href="/register">Sign Up</a>
        </p>
        <a className="backLink" href="/">Back to Home</a>
      </div>
    </main>
  )
}

export default Login