import React, { useState } from "react";
import { Modal, Button, Image, Header } from "semantic-ui-react";

const EmployeeModal = ({ employee }) => {

  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button size="tiny" positive data-cy="view-employee-button">View</Button>}
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
