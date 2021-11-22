import React from "react";
import EmployeeList from "./EmployeeList";

const App = () => {

  return (
    <React.Fragment>
      <h1 data-cy="employee-header">Employee List</h1>
      <EmployeeList />
    </React.Fragment>
  );
};

export default App;
