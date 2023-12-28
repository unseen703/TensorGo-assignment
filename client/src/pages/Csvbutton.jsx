import React, { useState } from "react";
import { CSVLink } from "react-csv";
import axios from "axios";

const Csvbutton = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
//   const [loading, setLoading] = useState(false);

  const getUsers = async (event, done) => {
    
    console.log("reached");
    //   setLoading(true);
      try {
        const {data} = await axios.get(`http://localhost:3000/download`);
       
        // console.log(data);
        let x= [];
        data.forEach(element => {
          let obj = {
            Id:element.Id,
            name:element.name,
            email:element.email,
            gender:element.gender,
            status:element.status,
          }
        //   console.log(element)
          x.push(obj);
        });
        
        // const userListJson = await axios.get("/api/users");
        console.log(x);
        setListOfUsers(x);
        done(true);
      } catch (error) {
        // console.log("resached");
        console.log(error);
        done(false);
      
    }
  };

 

  return (
    <CSVLink  className="bg-primary text-white m-2 border-2 rounded p-2 text-decoration-none" data={listOfUsers} asyncOnClick={true} onClick={getUsers }>
      {  "Download CSV File"}
    </CSVLink>
  );
};

export default Csvbutton;
