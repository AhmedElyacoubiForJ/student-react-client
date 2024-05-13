import React, { useState, useEffect } from "react";
import { getStudents } from "../../api/StudentService";

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

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Departement</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.department}</td>
              <td>View</td>
              <td>Update</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default StudentsView;
