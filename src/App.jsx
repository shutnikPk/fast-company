import React from "react";
import API from "./API";
import HeaderComponent from "./components/header";
import Users from "./components/users";
const App = () => {
  const users = API.users.fetchAll();
  return (
    <>
      <HeaderComponent users={users} />
      <Users users={users} />
    </>
  );
};

export default App;
