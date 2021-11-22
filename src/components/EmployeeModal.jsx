import React, { useState } from "react";
import { Modal, Button, Image, Header } from "semantic-ui-react";
import axios from "axios";

const EmployeeModal = ({ id }) => {

  const [open, setOpen] = useState(false);
  const [employee, setEmployee] = useState({});

  const fetchEmployee = async () => {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);
    setEmployee(response.data.data);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button onClick={() => fetchEmployee()} size="tiny" positive data-cy="view-employee-button">View</Button>}
    >
      <Modal.Content image data-cy="modal-container">
        <Image data-cy="employee-image" size="small" src={employee.avatar} wrapped />
        <Modal.Description>
          <Header data-cy="employee-name">{employee.first_name} {employee.last_name}</Header>
          <p data-cy="employee-email">
            Email: {employee.email}
          </p>
        </Modal.Description>
      </Modal.Content>

      <Modal.Actions>
        <Button color="black">Edit</Button>
        <Button negative>Delete</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default EmployeeModal;
