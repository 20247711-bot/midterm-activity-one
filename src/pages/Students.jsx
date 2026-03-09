import { useEffect, useState } from "react"
import StudentList from "../components/StudentList"

function Students() {

  const [students, setStudents] = useState([])

  const studentData = [
    {id:1, name:"Bob", course:"BSIT"},
    {id:2, name:"Maria", course:"BSCS"},
    {id:3, name:"John", course:"BSIS"},
    {id:4, name:"Anna", course:"BSIT"},
    {id:5, name:"Karl", course:"BSCS"},
    {id:6, name:"Ann", course:"BSIS"},
    {id:7, name:"Rob", course:"BSIT"},
    {id:8, name:"Mark", course:"BSCS"},
    {id:9, name:"Paul", course:"BSIS"},
    {id:10, name:"Kim", course:"BSIT"}
  ]

  useEffect(() => {
    setStudents(studentData)
  }, [])

  return (
    <div className="container mt-4">
      <h2>Student List</h2>

      {students.map(student => (
        <StudentList key={student.id} student={student} />
      ))}

    </div>
  )
}

export default Students