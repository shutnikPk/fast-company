import React from "react";
const CounterComponent = ({ users }) => {
  return (
    <span className="badge bg-primary">{users.length} {users.length >= 5 || users.length <= 1 ? 'Человек' : 'Человека'} тусанет с тобой сегодня</span>
  );
};

export default CounterComponent;
