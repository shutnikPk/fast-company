import React from "react";
import RowTable from "./row";
const TableUsers = ({ users, handleUserDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Качества</th>
          <th scope="col">Профессия</th>
          <th scope="col">Встретился, раз</th>
          <th scope="col">Оценка</th>
          <th scope="col">Add Favorite</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <RowTable handleUserDelete={handleUserDelete} user={user} key={user._id} />
        ))}
      </tbody>
    </table>
  );
};

export default TableUsers;
