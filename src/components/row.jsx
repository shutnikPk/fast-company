import React from "react";

const RowTable = (user) => {
  console.log(user.user);
  return (
    <tr>
      <td>{user.user.name}</td>
      <td>{user.user.qualities.map((qual) => qual.name)}</td>
      <td>{user.user.profession.name}</td>
      <td>{user.user.completedMeetings}</td>
      <td>{user.user.rate}</td>
      <td>Delete</td>
    </tr>
  );
};

export default RowTable;
