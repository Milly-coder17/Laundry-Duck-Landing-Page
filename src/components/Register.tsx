import laundryDuckLogo from "../assets/Laundry Duck Logo.png"
import "../styles/Register.css"

function Register() {
  return (
    <main className="registerPage">
      <div className="registerCard">
        <img src={laundryDuckLogo} alt="LaundryDuck Logo" />

        <h1>Create Account</h1>
        <p>Join LaundryDuck and make laundry day easier.</p>

        <form>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            required
          />

          <label htmlFor="registerEmail">Email Address</label>
          <input
            id="registerEmail"
            type="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="registerPassword">Password</label>
          <input
            id="registerPassword"
            type="password"
            placeholder="Create a password"
            minLength={8}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            minLength={8}
            required
          />

          <button type="submit">Create Account</button>
        </form>

        <p className="registerLoginText">
          Already have an account? <a href="/login">Log In</a>
        </p>

        <a className="registerBackLink" href="/">Back to Home</a>
      </div>
    </main>
  )
}

export default Register