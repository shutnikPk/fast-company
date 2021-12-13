import React from "react";
import api from "../API";
import RowTable from "./row";

const Users = () => {
  const users = api.users.fetchAll();
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Каченства</th>
          <th scope="col">Профессия</th>
          <th scope="col">Встретился, раз</th>
          <th scope="col">Оценка</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <RowTable />
        ))}
      </tbody>
    </table>
  );
};

export default Users;
