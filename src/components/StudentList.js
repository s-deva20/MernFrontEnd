import { useEffect,useState} from "react";
import { getStudents } from "../api";
import { Link } from "react-router-dom";
import { deleteStudent } from "../api";

function StudentList(){
    const [students,setStudent]=useState([]);
    const loadStudent=()=>{
        getStudents().then(res=>setStudent(res.data));
    };

    useEffect(()=>{
        loadStudent();
    },[]);

    const removeStudent=async (rollno)=>{
        await deleteStudent(rollno);
        loadStudent();
    }

    return (
        <>
        <h2>Student List</h2>
        <Link to="/add">Add Student</Link>

        <table border='3'>
            <tr>
            <th>Roll NO</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
            </tr>
            {
                students.map(s=>(
                    <tr key={s.rollno}>
                        <td>{s.rollno}</td>
                        <td>{s.name}</td>
                        <td>{s.email}</td>
                        <td>
                            <Link to={`/edit/${s.rollno}`}>
                            Edit
                            </Link>

                            <button onClick={()=> removeStudent(s.rollno)}>Delete</button>
                        </td>
                    </tr>
            ))}
        </table>
        </>
    );

}

export default StudentList;