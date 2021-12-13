import React from "react";
import api from "../API";

const RowTable = () => {
  const users = api.users.fetchAll();
  return (
    <tr>
      <td scope="row">1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  );
};

export default RowTable;
