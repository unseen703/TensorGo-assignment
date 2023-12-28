import axios from "axios";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({
    name: "",
    email: "",
    gender: "",
    status: "",
  });
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  let config = {
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000'
    }
  }
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:3000/${id}`, {...book,id}, config);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Update the User</h1>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
      </InputGroup>

      <Form.Select name="gender" onChange={handleChange}>
        <option value="none" selected disabled hidden>
          Gender
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </Form.Select>
      <Form.Select name="status" onChange={handleChange}>
        <option value="none" selected disabled hidden>
          Status
        </option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </Form.Select>
      <button onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
      <Link to="/?page=1&limit=10">See all Users</Link>
    </div>
  );
};

export default Update;
// <select onChange={onOptionChangeHandler}>
//                 <option>Please choose one option</option>
//                 {options.map((option, index) => {
//                     return (
//                         <option key={index}>
//                             {option}
//                         </option>
//                     );
//                 })}
