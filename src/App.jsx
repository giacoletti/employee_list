import React from "react";
import EmployeeList from "./components/EmployeeList";
import { Container, Header } from "semantic-ui-react";

const App = () => {

  return (
    <React.Fragment>
      <Container>
        <Header size="huge" data-cy="employee-header" >Employee List</Header>
        <EmployeeList />
      </Container>
    </React.Fragment>
  );
};

export default App;
