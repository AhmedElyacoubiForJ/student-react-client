import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { addStudent } from "../../api/StudentService";

const AddStudent = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    departement: "",
  });
  const { firstName, lastName, email, department } = student;

  const handleInputChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const saveStudent = async (e) => {
    e.preventDefault();
    const response = await addStudent(student);
    navigate("/view-students")
  };

  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2>Add Student</h2>
      <form onSubmit={(e) => saveStudent(e)}>
        <div className="input-group mb-5">
          <label htmlFor="firstName" className="input-group-text">
            First Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group mb-5">
          <label htmlFor="lastName" className="input-group-text">
            Last Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group mb-5">
          <label htmlFor="email" className="input-group-text">
            Your Email
          </label>
          <input
            className="form-control col-sm-6"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group mb-5">
          <label htmlFor="department" className="input-group-text">
            Department
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="department"
            id="department"
            value={department}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="row mb-5">
          <div className="col-sm-6">
            <button type="submit" className="btn btn-outline-success btn-lg">
              Save
            </button>
          </div>
          <div className="col-sm-2">
            <Link to={"/view-students"}
              className="btn btn-outline-warning btn-lg"
              type="submit"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
