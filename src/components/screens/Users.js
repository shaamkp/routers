import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Users() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page")
      .then(function (response) {
        setusers(response.data.data);
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  let renderUsers = () => {
    return users.map((user) => (
      <ul>
        <li>
          <img src={user.avatar} alt="" />
          <p></p>
        </li>
      </ul>
    ));
  };
  return (
    <>
      <h1>Users</h1>
    </>
  );
}
