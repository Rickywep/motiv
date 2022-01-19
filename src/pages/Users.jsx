import React from "react";
import FormNewUser from "../components/FormNewUser";
import NavAdmin from "../components/NavAdmin";
import { TabUsers } from "../components/TabUsers";

export default function Users() {
  return (
    <div>
      <NavAdmin />
      <FormNewUser />
      <TabUsers />
    </div>
  );
}
