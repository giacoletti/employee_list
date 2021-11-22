import React, { useState, useEffect } from "react";
import axios from "axios";
import { Item } from "semantic-ui-react";

const EmployeeList = () => {

  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const response = await axios.get('https://reqres.in/api/users?per_page=5');
    setEmployees(response.data.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const employeeList = employees.map((employee) => {
    return (
      <Item key={employee.id}>
        <Item.Content verticalAlign="middle">
          <Item.Header>{`${employee.first_name} ${employee.last_name}`}</Item.Header>
        </Item.Content>
      </Item>
    );
  });

  return (
    <Item.Group data-cy="employee-list">
      {employeeList}
    </Item.Group>
  );
};

export default EmployeeList;
