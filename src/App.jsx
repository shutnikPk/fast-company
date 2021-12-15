import React, { useState } from "react";
import API from "./API";
import HeaderComponent from "./components/header";
import Users from "./components/users";
const App = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
  const handleUserDelete = (userId) => {
    const tempArr = users.filter(el => el._id !== userId)
    setUsers(tempArr)
  }
  return (
    <>
      <HeaderComponent users={users} />
      <Users handleUserDelete={handleUserDelete} users={users} />
    </>
  );
};

export default App;
