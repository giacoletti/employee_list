import React from "react";
import { Item } from "semantic-ui-react";
import EmployeeModal from "./EmployeeModal";

const EmployeeListItem = ({ employee }) => {
  return (
    <React.Fragment>
      <Item data-cy={`employee-${employee.id}`} key={employee.id}>
        <Item.Image circular size="tiny" alt={`${employee.first_name} ${employee.last_name} picture`} src={employee.avatar} />
        <Item.Content verticalAlign="middle">
          <Item.Header>{`${employee.first_name} ${employee.last_name}`}</Item.Header>
          <Item.Extra>
            <EmployeeModal id={employee.id} />
          </Item.Extra>
        </Item.Content>
      </Item>
    </React.Fragment>
  );
};

export default EmployeeListItem;
