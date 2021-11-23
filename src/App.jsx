import React from "react";
import EmployeeList from "./components/EmployeeList";
import { Container, Header } from "semantic-ui-react";

const App = () => {

  return (
    <Container>
      <Header size="huge" data-cy="employee-header" >Employee List</Header>
      <EmployeeList />
    </Container>
  );
};

export default App;
