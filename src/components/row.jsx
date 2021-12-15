import React from "react";
import ProfessionComponent from "./profession";
import QualityComponent from "./quality";

const RowTable = ({ user, handleUserDelete }) => {
  // const deleteUserHandler = () => {
  //   console.log("qq");
  // };
  return (
    <tr>
      <td>{user.name}</td>
      <td>
        {user.qualities.map((qual) => (
          <QualityComponent key={qual._id} qual={qual} />
        ))}
      </td>
      <td>
        <ProfessionComponent prof={user.profession} />
      </td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleUserDelete(user._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default RowTable;
