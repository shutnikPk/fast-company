import React from "react";
import CounterComponent from "./counter";
const HeaderComponent = ({ users }) => {
  return (
    <h2>
      <CounterComponent users={users} />
    </h2>
  );
};

export default HeaderComponent;
