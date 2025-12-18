import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createStudent } from "../api";

function AddStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await createStudent({ name, email });
    navigate("/");
  };

  return (
    <>
      <h2>Add Student</h2>

      <form onSubmit={submit}>
        <label>Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button >Save</button>
      </form>
    </>
  );
}

export default AddStudent;