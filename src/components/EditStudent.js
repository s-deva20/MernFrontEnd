import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {getSingleStudents,updateStudent} from "../api";



function EditStudent(){
    const { id }=useParams();
    const [student,setStudent]=useState({name:"",email:""});
    const navigate=useNavigate();


useEffect(()=>
{
    getSingleStudents(id).then(res=>setStudent(res.data));
},[id]);


const submit=async(e)=>{
    e.preventDefault();
    await updateStudent(id,student);
    navigate("/");
}

return(
    <>
    <h2>Edit Student</h2>
    <form onSubmit={submit}>
        <lable>Name</lable>
        <input value={student.name} onChange={e=>setStudent({...student,name:e.target.value})}/>

        <lable>Email</lable>
        <input value={student.email} onChange={e=>setStudent({...student,email:e.target.value})}/>

        <button>Update</button>
    </form>
    </>
)
}

export default EditStudent;