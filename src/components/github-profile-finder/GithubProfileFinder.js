import React, { useState, useEffect } from "react";
import User from "./User";
import './profileFinder.css';

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("sulakshana-info247");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit() { fetchGithubUserData()}

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    if (data) {
      setUserData(data);
      setLoading(false);
     // setUserName('');
    }
    console.log(data);
  }

  if (loading) {
    return <h1>Loading data!! please wait.</h1>;
  }

  return (
    <div className="github-profile-container">
      <div className="inpur-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          onChange={(event) => setUserName(event.target.value)}
          value={userName}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      { (userData !== null) ? <User user={userData} /> : null}
    </div>
  );
};

export default GithubProfileFinder;
