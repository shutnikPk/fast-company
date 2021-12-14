import React from "react";
import API from "./API";
import Users from "./components/users";
const App = () => {
  return <Users users={API.users.fetchAll()} />;
};

export default App;
