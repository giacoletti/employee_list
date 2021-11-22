import React, { useState, useEffect } from "react";
import EmployeeModal from "./EmployeeModal";
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
      <Item data-cy={`employee-${employee.id}`} key={employee.id}>
        <Item.Image circular size="tiny" alt={`${employee.first_name} ${employee.last_name} picture`} src={employee.avatar} />
        <Item.Content verticalAlign="middle">
          <Item.Header>{`${employee.first_name} ${employee.last_name}`}</Item.Header>
          <Item.Extra>
            <EmployeeModal employee={employee}/>
          </Item.Extra>
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
