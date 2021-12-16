import React from "react";
import PaginationComponent from "./pagination";
import RowTable from "./row";
const TableUsers = ({ users, handleUserDelete }) => {
  const pageSize = 4
  const handlePageChange = (page) => { console.log(page) }
  return (
    <>
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
      < PaginationComponent itemsCount={users.length} pageSize={pageSize} onPageChange={handlePageChange} />
    </>
  );
};

export default TableUsers;
