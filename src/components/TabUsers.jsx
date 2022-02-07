import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import Scrollbars from "react-custom-scrollbars";
import TablaBack from "./TablaBack";

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

  return (
    <div className="mt-5 p-5 d-flex  justify-content-center  ">
      <Scrollbars className="scroll-usuarios">
        <Table responsive bordered className="tabla">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Usuarios</th>
            </tr>
          </thead>
        </Table>
        {users.map((user, id) => (
          <TablaBack  user={user} key={id} />
        ))}
      </Scrollbars>
    </div>
  );
};
