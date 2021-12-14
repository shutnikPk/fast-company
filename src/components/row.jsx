import React from "react";

const RowTable = ({ user }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>
        {user.qualities.map((qual) => (
          <span key={qual._id} className={`badge bg-` + qual.color}>
            {qual.name}
          </span>
        ))}
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}</td>
      <td>Delete</td>
    </tr>
  );
};

export default RowTable;
