import React from "react";
import { SortIcon } from "../../assets/icons/SortIcon";
import { useGlobalProducts } from "../../context/ProductsSection";
import { eventType } from "./Products.interface";
import { sortKey } from "../../keys/enums";

export const Option = () => {
  const { setFilter, filter } = useGlobalProducts();
  const onChangeHandler = (e: eventType) => {
    const { value, name } = e.currentTarget;
    setFilter((pre) => ({ ...pre, [name]: value }));
  };
  return (
    <div className="col-sm-12 col-md-6 d-flex justify-content-between p-1 gap-1">
      <input
        type="text"
        name="query"
        className="form-control w-75 "
        placeholder="Search..."
        aria-label="Search"
        aria-describedby="basic-addon1"
        value={filter.query}
        onChange={onChangeHandler}
      />

      <select
        className="form-select"
        aria-label="Default select example"
        placeholder="sort by"
        name="sortBy"
        defaultValue={sortKey.NONE}
        onChange={onChangeHandler}
        value={filter.sortBy}
      >
        <option value={sortKey.NONE}>{sortKey.NONE}</option>
        <option value={sortKey.ASCENDING}>{sortKey.ASCENDING}</option>
        <option value={sortKey.DESCENDING}>{sortKey.DESCENDING}</option>
      </select>
    </div>
  );
};
