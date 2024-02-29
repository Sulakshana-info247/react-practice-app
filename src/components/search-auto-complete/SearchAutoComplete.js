import React, { useEffect, useState } from "react";
import Suggestions from "./Suggestions";

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState("");

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      console.log(data);

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((user) => user.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }

  function handleClick(event){
    console.log(event.target.innerText)
    setShowDropDown(false);
    setSearchParam(event.target.innerText)
    setFilteredUsers([])

  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  console.log(users, filteredUsers);

  return (
    <div className="search-auto-complete-container">
      {loading ? (
        <h1> Loading Data! please wait!</h1>
      ) : (
        <input
          name="search-users"
          placeholder="Search Users here.."
          value={searchParam}
          onChange={handleChange}
        />
      )}

      {showDropDown && <Suggestions handleClick={handleClick} data={filteredUsers} />}
    </div>
  );
};

export default SearchAutoComplete;
