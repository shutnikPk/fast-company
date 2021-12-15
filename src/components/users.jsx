import React from "react";
import TableUsers from "./table";

const Users = ({ users, handleUserDelete }) => {
  return <TableUsers handleUserDelete={handleUserDelete} users={users} />;
};

export default Users;
