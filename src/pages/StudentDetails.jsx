import { useParams } from "react-router-dom"

function StudentDetails() {

  const { id } = useParams()

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

  const student = studentData.find(s => s.id === parseInt(id))

  return (
    <div className="container mt-4">
      <h2>Student Details</h2>

      <div className="card p-3">
        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Course:</strong> {student.course}</p>
      </div>

    </div>
  )
}

export default StudentDetails