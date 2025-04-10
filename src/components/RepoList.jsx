import React, { useEffect, useState } from "react";

function RepoList() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Geo222222/repos?sort=updated")
      .then(res => res.json())
      .then(data => setRepos(data.slice(0, 6)))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="repo-list">
      {repos.map(repo => (
        <div key={repo.id} className="glass-card" data-aos="zoom-in">
          <h3>{repo.name}</h3>
          <p>{repo.description || "No description"}</p>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View Repo</a>
        </div>
      ))}
    </div>
  );
}

export default RepoList;
