import React, { useState, useEffect } from "react";
import EmployeeListItem from "./EmployeeListItem";
import { Item } from "semantic-ui-react";
import Users from "../modules/Users";

const EmployeeList = () => {

  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const response = await Users.index({ per_page: 5 });
    setEmployees(response);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const employeeList = employees.map((employee) => {
    return (
      <EmployeeListItem key={employee.id} employee={employee} />
    );
  });

  return (
    <Item.Group data-cy="employee-list">
      {employeeList}
    </Item.Group>
  );
};

export default EmployeeList;
