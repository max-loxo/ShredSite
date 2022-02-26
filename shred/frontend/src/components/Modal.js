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
      activeUser: this.props.activeUser,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeUser = { ...this.state.activeUser, [name]: value };

    this.setState({ activeUser });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>New User</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="user-firstName">First Name</Label>
              <Input
                type="text"
                id="user-firstName"
                name="first_name"
                value={this.state.activeUser.first_name}
                onChange={this.handleChange}
                placeholder="Enter User First Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="user-last-name">Last Name</Label>
              <Input
                type="text"
                id="user-lastName"
                name="last_name"
                value={this.state.activeUser.last_name}
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
                value={this.state.activeUser.email}
                onChange={this.handleChange}
                placeholder="Enter User email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="user-riding">Sport Preference</Label>
              <Input
                type="text"
                id="user-riding"
                name="riding"
                value={this.state.activeUser.riding}
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
                value={this.state.activeUser.stance}
                onChange={this.handleChange}
                placeholder="Enter User Stance"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeUser)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
