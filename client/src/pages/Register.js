import { useState } from "react";
import React from 'react';
import axios from "axios";
import { useNavigate , Link } from "react-router-dom";
import { toast } from 'react-toastify';

const Register = () => {

  const navigate = useNavigate();
  const [input,setInput] = useState({
    username : "",
    email : "",
    password : ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://checkdeploye.onrender.com/api/v1/user/register', input);
      toast.success(res.data.message);
      navigate('/login');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  
  return (
    <>
  <div className="container shadow rounded my-5 p-4" style={{ maxWidth: '500px' }}>
  <h2 className="text-center mb-4 fw-bold">Sign Up Here</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label htmlFor="name" className="form-label fw-semibold">Name</label>
      <input
        type="text"
        name="username"
        value={input.username}
        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
        className="form-control"
        id="name"
        placeholder="Enter Name"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="form-label fw-semibold">Email</label>
      <input
        type="email"
        name="email"
        value={input.email}
        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
        className="form-control"
        id="email"
        placeholder="Enter Email"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="form-label fw-semibold">Password</label>
      <input
        type="password"
        name="password"
        value={input.password}
        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
        className="form-control"
        id="password"
        placeholder="Enter Password"
        required
      />
    </div>
    <div className="d-grid">
      <button type="submit" className="btn btn-primary py-2 fw-semibold">
        Register
      </button>
    </div>
  </form>
  <div className="text-center mt-4">
  <span className="fw-semibold">Already registered? </span>
  <Link to="/login" className="fw-semibold text-primary text-decoration-none">Login here</Link>
 </div>
</div>
    </>
  );
};

export default Register;
