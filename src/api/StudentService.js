import axios from "axios";

const API_URL = "http://localhost:8080/students";

export async function getStudents() {
  return await axios.get(API_URL, {
    validateStatus: () => {
      return true;
    },
  });
}

export async function getStudent(id) {
  return await axios.get(`${API_URL}/student/${id}`);
};

export async function createStudent(student) {
  return await axios.post(API_URL, student);
};

export async function updateStudent(id, student) {
  return await axios.put(`${API_URL}/update/${id}`, student);
};

export async function deleteStudent(id) {
  return await axios.delete(`${API_URL}/delete/${id}`);
};
