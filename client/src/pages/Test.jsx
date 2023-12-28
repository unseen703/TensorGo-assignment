import React  from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Test = ({users}) => {


// get table row data
const tdData =() =>{
   
     return users.map((data)=>{
       return(
           <tr key = {data.Id}>
           <td>{data.Id}</td>
           <td>{data.name}</td>
           <td>{data.email}</td>
           <td>{data.gender}</td>
           <td>{data.status}</td>
           <td> <Button className="update" variant="primary">
              <Link
                to={`/update/${data.Id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </Button></td>
            
           </tr>
       )
     })
}


  return (

      <table className="table">
        <thead>
         <tr>
         <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Status</th>
        <th>Action</th>
         </tr>
        </thead>
        <tbody>
        {tdData()}
        </tbody>
       </table>
  )





}

export default Test