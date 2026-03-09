import { Link } from "react-router-dom"

function StudentList({student}) {

  return (
    <table className="table table-striped">
      <tbody>
        <tr>
          <td>{student.name}</td>
          <td>{student.course}</td>
          <td>
            <Link className="btn btn-primary btn-sm"
             to={`/students/${student.id}`}>
              View
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default StudentList