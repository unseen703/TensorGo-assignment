import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const {  data } = await axios.get('https://gorest.co.in/public-api/users');
      // const { meta, data } =  API.get('/');
      let  {pages}  = data.meta.pagination;
      // let {total} = meta.pagination;
      // let limit=  10;
      // console.log(data);  
      for(let x = 2; x<= pages;x++ )
      {
        const doc = await axios.get(`https://gorest.co.in/public-api/users?page=${x}&per_page=10`);
        await axios.post('http://localhost:3000/create', doc.data).then((res)=>{
         console.log("succuess");
        })
        .catch((err)=>{
   throw err;
        });
      }
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div className="form">
     
      <button onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <Link to="/">See all books</Link>
    </div>
  );
};

export default Add;

