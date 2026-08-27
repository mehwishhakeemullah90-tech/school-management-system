import { useState } from 'react'
import Login from './components/Login.jsx'
import TeacherDashboard from './components/TeacherDashboard.jsx'
import StudentDashboard from './components/StudentDashboard.jsx'

function App() {
  // while this is null, we show the Login page
  // once a user logs in successfully, we store their info here
  const [currentUser, setCurrentUser] = useState(null)

  const handleLoginSuccess = (user) => {
    setCurrentUser(user)
  }

  const handleLogout = () => {
    setCurrentUser(null)
  }

  return (
    <div className="app">
      {/* CONDITIONAL RENDERING happens here */}
      {!currentUser ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : currentUser.role === 'Teacher' ? (
        <TeacherDashboard onLogout={handleLogout} />
      ) : (
        <StudentDashboard currentUser={currentUser} onLogout={handleLogout} />
      )}
    </div>
  )
}

export default App
