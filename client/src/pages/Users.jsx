import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Test from "./Test";
import { CSVLink } from "react-csv";
import Csvbutton from "./Csvbutton";
// import { Pagination } from "@material-ui/lab";
import Pagination from "./Pagination";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
// import { Button } from "bootstrap";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
let limit = 10;
const Users = () => {
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(1);
  const [data, setData] = useState([]);

  // const PaginationData= (users)=>{
  //   // const st = (currentPage-1)*limit;
  //   // const en = st +limit;
  //   // return users.slice(st, en);
  // }

  const query = useQuery();
  const navigate = useNavigate();

  const page = query.get("page");
  // const navigate = useNavigate();
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000?page=${page}&limit=10`
        );
        console.log(res);
        setUsers(res.data.data);

        setTotal(res.data.total);
        console.log(total);
        // navigate(`/?page=${page}?limit=10`)
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUsers();
  }, [page]);

  return (
    <div className="mt-5">
      <h1> Users </h1>
      <div className="m-2">
        <Csvbutton/>
      </div>
      <div className="Users">
        {users && users.length ? <Test users={users} /> : <p>No users found</p>}
      </div>
      <Pagination className="pagination-bar" page={page} total={total} />
    </div>
  );
};

export default Users;
