import students from '../data/students.json'
import results from '../data/result.json'

// currentUser comes from user.json and contains a "studentId"
// we use that studentId to find the matching record in students.json
// and the matching record in result.json. This is how the 3 files connect.
function StudentDashboard({ currentUser, onLogout }) {
  const myInfo = students.find((s) => s.id === currentUser.studentId)
  const myResult = results.find((r) => r.studentId === currentUser.studentId)

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Student Dashboard</h2>
        <button onClick={onLogout}>Logout</button>
      </div>

      {myInfo ? (
        <div className="student-card">
          <p><strong>Name:</strong> {myInfo.name}</p>
          <p><strong>Age:</strong> {myInfo.age}</p>
          <p><strong>Percentage:</strong> {myInfo.percentage}%</p>
          <p>
            <strong>Result Status:</strong>{' '}
            {/* ternary operator: Pass shows green, Fail shows red */}
            <span className={myResult.status === 'Pass' ? 'pass-text' : 'fail-text'}>
              {myResult.status === 'Pass' ? 'Pass' : 'Fail'}
            </span>
          </p>
        </div>
      ) : (
        <p>No record found for this student.</p>
      )}
    </div>
  )
}

export default StudentDashboard
