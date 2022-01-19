import React, { useEffect, useState } from "react";
import axios from "axios";

export const TabUsers = () => {
  const [users, setUsers] = useState([]);
  console.log("file: TabUsers.jsx ~ line 6 ~ users", users);
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("http://localhost:4000/api/usuarios");
      setUsers(response.data.usuarios);
    };

    getUsers();
  }, []);

  return <div>tabla usuarios</div>;
};
