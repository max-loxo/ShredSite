import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>New User</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="user-first-name">First Name</Label>
              <Input
                type="text"
                id="user-first-name"
                name="first-name"
                value={this.state.activeItem.firstName}
                onChange={this.handleChange}
                placeholder="Enter User First Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="user-last-name">Last Name</Label>
              <Input
                type="text"
                id="user-last-name"
                name="last-name"
                value={this.state.activeItem.lastName}
                onChange={this.handleChange}
                placeholder="Enter User Last Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="user-email">Email</Label>
              <Input
                type="text"
                id="user-email"
                name="email"
                value={this.state.activeItem.email}
                onChange={this.handleChange}
                placeholder="Enter User email"
              />
              <FormGroup>
              <Label for="user-riding">Sport Preference</Label>
              <Input
                type="text"
                id="user-riding"
                name="riding"
                value={this.state.activeItem.riding}
                onChange={this.handleChange}
                placeholder="Enter Users preffered sport"
              />
            </FormGroup>
            <FormGroup>
              <Label for="user-stance">Stance</Label>
              <Input
                type="text"
                id="user-stance"
                name="stance"
                value={this.state.activeItem.stance}
                onChange={this.handleChange}
                placeholder="Enter User Stance"
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="completed"
                  checked={this.state.activeItem.completed}
                  onChange={this.handleChange}
                />
                Completed
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
