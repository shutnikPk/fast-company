import React, { useState } from "react";
import BookmarkComponent from "./bookmark";
import ProfessionComponent from "./profession";
import QualityComponent from "./quality";

const RowTable = ({ user, handleUserDelete }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const isFacoriteTogleHandler = () => {
    setIsFavorite(!isFavorite)
  }
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
      <td><BookmarkComponent isFacoriteTogleHandler={isFacoriteTogleHandler} isFavorite={isFavorite} /></td>
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
