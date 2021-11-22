import React, { useState, useEffect } from "react";
import axios from "axios";

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
      <li key={employee.id}>{`${employee.first_name} ${employee.last_name}`}</li>
    );
  });

  return (
    <div>
      <ul data-cy="employee-list">{employeeList}</ul>
    </div>
  );
};

export default EmployeeList;
