import axios from "axios"

const API="http://localhost:5000/api/students";


export const getStudents=()=>axios.get(`${API}/allstudents`);

export const createStudent=(data)=>axios.post(API,data);

export const deleteStudent=(id)=>axios.delete(`${API}/allstudents/delete/${id}`);

export const getSingleStudents=(id)=>axios.get(`${API}/allstudents/${id}`)
export const updateStudent=(id,data)=>axios.put(`${API}/allstudents/update/${id}`,data);

