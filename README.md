# School Management System (React)

A simple login-based app. Log in as a Teacher or a Student and see the
matching dashboard.

## How to run it

1. Open this folder in a terminal.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the app:
   ```
   npm run dev
   ```
4. Open the link it shows (usually http://localhost:5173) in your browser.

## Demo logins

**Teacher**
- Email: teacher@school.com
- Password: teacher123

**Student**
- Email: ali@school.com
- Password: student123
(also: sara@school.com / student123, hamza@school.com / student123)

## How the 3 JSON files connect

- `src/data/user.json` → login info (email, password, role).
  Every **Student** entry also has a `studentId`.
- `src/data/students.json` → each student's `id`, name, age, percentage.
- `src/data/result.json` → each student's `studentId` and Pass/Fail status.

So when a student logs in:
1. `user.json` gives us their `studentId`.
2. We use that `studentId` to find their row in `students.json`.
3. We use the same `studentId` to find their row in `result.json`.

That's why the Student Dashboard is never hardcoded — it always looks up
the record that matches whoever is logged in.

## Folder structure

```
school-management-system/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx           (holds login state, decides which page to show)
    ├── App.css
    ├── data/
    │   ├── user.json
    │   ├── students.json
    │   └── result.json
    └── components/
        ├── Login.jsx
        ├── TeacherDashboard.jsx
        └── StudentDashboard.jsx
```

## React concepts used (as required)

- `map()` — lists all students in TeacherDashboard.jsx
- `key` — each row uses `key={student.id}`
- Conditional rendering — App.jsx decides Login / Teacher / Student view
- Ternary operator — Pass/Fail text and color in StudentDashboard.jsx
- Form submission — Login.jsx uses `onSubmit` + `e.preventDefault()`
"# school-management-system" 
"# school-management-system" 
