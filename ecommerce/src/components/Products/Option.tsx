import React from "react";
import { SortIcon } from "../../assets/icons/SortIcon";

export const Option = () => {
  return (
    <div className="col-sm-12 col-md-6 d-flex justify-content-between p-1">
      <input
        type="text"
        className="form-control w-75 "
        placeholder="Search..."
        aria-label="Search"
        aria-describedby="basic-addon1"
      />
      <button className="btn btn-primary">
        <SortIcon />
        Sort
      </button>
    </div>
  );
};
