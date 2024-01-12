
import React, { useEffect, useState } from "react";

const UseeffictAPI = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    setUsers(await response.json());
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div className="container bg-info">
        <h2 className="text-center pt-3 fw-bold text-uppercase">
          how to fetch API
        </h2>
        <div className="row">
          {users.map((data) => (
            <div className="col-4 p-3" key={data.id}>
              <div className="bg-warning p-2">
                <h2>{data.login}</h2>
                <h3>{data.type}</h3>
                <p>{data.html_url}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseeffictAPI;
