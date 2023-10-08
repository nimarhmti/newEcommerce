import React from "react";
import { SortIcon } from "../../assets/icons/SortIcon";
import { useGlobalProducts } from "../../context/ProductsSection";
import { eventType } from "./Products.interface";

export const Option = () => {
  const { setFilter, filter } = useGlobalProducts();
  const onChangeHandler = (e: eventType) => {
    const { value, name } = e.currentTarget;
    setFilter((pre) => ({ ...pre, [name]: value }));
  };
  return (
    <div className="col-sm-12 col-md-6 d-flex justify-content-between p-1">
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

      <div className="dropdown">
        <a
          className="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown link
        </a>

        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
