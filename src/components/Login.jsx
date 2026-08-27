import { useState } from 'react'
import users from '../data/user.json'

// This component only does ONE job: take email + password,
// check them against user.json, and tell App.jsx who logged in.
function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault() // stop page from refreshing

    // look for a user whose email AND password both match
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    )

    if (foundUser) {
      setError('')
      onLoginSuccess(foundUser) // send the logged-in user up to App.jsx
    } else {
      setError('Invalid email or password. Please try again.')
    }
  }

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>School Login</h2>

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        <button type="submit">Login</button>

        {/* error message only shows when there IS an error */}
        {error && <p className="error-text">{error}</p>}

        <div className="hint-box">
          <p><strong>Try these demo logins:</strong></p>
          <p>Teacher: teacher@school.com / teacher123</p>
          <p>Student: ali@school.com / student123</p>
        </div>
      </form>
    </div>
  )
}

export default Login
