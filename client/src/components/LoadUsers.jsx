import React, { useState, useEffect } from "react";
import axios from "axios";

export const LoadUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  // console.log()
  return (
    <div>
      <ul>
        {users.map((user, i) => {
          return (
            <li key={user._id}>
              <a href={`/users/${user._id}`}>{user.firstName}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
