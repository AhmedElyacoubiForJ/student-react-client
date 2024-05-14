import React, { useState, useEffect } from "react";
import { getStudents, deleteStudent } from "../../api/StudentService";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

// Strg + d : escape
// duplicate : shift & alt
const StudentsView = () => {
  const [students, setStudents] = useState([]);

  const loadStudents = async () => {
    const response = await getStudents();
    if (response.status === 302) {
      setStudents(response.data);
    }
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    loadStudents();
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <section>
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Departement</th>
            <th colSpan={3}>Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {students.map((student, index) => (
            <tr key={student.id}>
              {/*  <th scope="row" key={index}>
                {index + 1}
              </th> */}
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.department}</td>
              <td className="mx-2">
                <Link
                  to={`/student-profile/${student.id}`}
                  className="btn btn-info"
                >
                  <FaEye />
                </Link>
              </td>
              <td className="mx-2">
                <Link
                  to={`/edit-student/${student.id}`}
                  className="btn btn-warning"
                >
                  <FaEdit />
                </Link>
              </td>
              <td className="mx-2">
                <button className="btn btn-danger" onClick={() => handleDelete(student.id)}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default StudentsView;
