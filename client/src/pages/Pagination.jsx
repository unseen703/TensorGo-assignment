import React, { useEffect, useState } from "react";
import classnames from "classnames";
import axios from "axios";
// import { usePagination } from './usePagination';
import { Pagination, PaginationItem } from "@material-ui/lab";
// import './pagination.scss';
// const DOTS = "....";
import { Link } from "react-router-dom";
const Paginate = ({ page, total }) => {
  console.log(total);
  return (
    <Pagination
      count={total}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/?page=${item.page}&limit=10`}
        />
      )}
    />
  );
};

export default Paginate;
