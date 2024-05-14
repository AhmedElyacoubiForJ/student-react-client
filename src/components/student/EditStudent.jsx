import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getStudent, updateStudent } from "../../api/StudentService";

const EditStudent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });
  const { firstName, lastName, email, department } = student;

  const loadStudent = async (id) => {
    const { data } = await getStudent(id);
    setStudent(data);
  };

  const handleInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const saveStudent = async (e) => {
    e.preventDefault();
    await updateStudent(id, student);
    navigate("/view-students");
  };

  useEffect(() => {
    loadStudent(id);
  }, []);

  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5"> Edit Student </h2>
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
            type="department"
            name="department"
            id="department"
            value={department}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="row mb-5">
          <div className="col-sm-3">
            <button className="btn btn-outline-success btn-lg" type="submit">
              Save
            </button>
          </div>
          <div className="col-sm-3">
            <Link
              to={"/view-students"}
              className="btn btn-outline-warning btn-lg"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditStudent;
