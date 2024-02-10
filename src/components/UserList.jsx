import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("0");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data?.users))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  /**
   *
   * Handles search input field updates
   */
  const handleSearching = (event) => {
    setSearch(event.target.value);
  };

  /**
   *
   * Handle sorting option updates
   */
  const handleSorting = (event) => {
    setSort(event.target.value);
  };

  /**
   * Filterred list of users
   */
  const filterUsers = users?.filter((user) =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const sortedUsers = filterUsers?.sort((item1, item2) => {
    let value1 = "";
    let value2 = "";

    switch (sort) {
      case "1":
        value1 = `${item1.firstName} ${item1.lastName}`.toLowerCase();
        value2 = `${item2.firstName} ${item2.lastName}`.toLowerCase();
        break;
      case "2":
        value1 = item1.email.toLowerCase();
        value2 = item2.email.toLowerCase();
        break;
      case "3":
        value1 = item1.company.name.toLowerCase();
        value2 = item2.company.name.toLowerCase();
        break;
      default:
        break;
    }
    return value1.localeCompare(value2);
  });

  return (
    <div className="d-flex flex-column gap-5">
      <div className="container-header d-flex justify-content-between">
        <div className="page-title d-flex align-items-center">
          <h2 className="text-center p-0 m-0">User List</h2>
        </div>
        <div className="page-filter d-flex align-items-center">
          <div className="me-3">
            <input
              value={search}
              type="text"
              onChange={handleSearching}
              className="form-control"
              placeholder="Search by name"
            />
          </div>
          <div className="me-3">
            <select
              value={sort}
              onChange={handleSorting}
              className="form-select"
              aria-label="Default select example"
            >
              <option value="0">Select sorting column</option>
              <option value="1">Name</option>
              <option value="2">Email</option>
              <option value="3">Company</option>
            </select>
          </div>
          <div className="m-0">
            <button type="button" className="btn btn-success">
              Add User
            </button>
          </div>
        </div>
      </div>
      <div className="container-body">
        <div className="row">
          {sortedUsers?.map((user) => (
            <div key={user.id} className="col-lg-4 col-sm-6 col-xs-12 mb-3">
              <UserCard user={user} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
