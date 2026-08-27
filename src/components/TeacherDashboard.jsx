import students from '../data/students.json'

function TeacherDashboard({ onLogout }) {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Teacher Dashboard</h2>
        <button onClick={onLogout}>Logout</button>
      </div>

      <p>All students in the school:</p>

      <table className="student-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Age</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {/* map() goes through every student and prints one row each */}
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.percentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TeacherDashboard
