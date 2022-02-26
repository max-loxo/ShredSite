import React, { Component } from "react";
import { NavItem } from "reactstrap";
import Modal from "./components/Modal";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      userList: [],
      modal:false,
      activeUser :{
        first_name: "",
        last_name:"",
        email:"",
        riding: "",
        stance:"",
      }
    };
  }
  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
    .get("/api/users/")
    .then((res) => this.setState({userList: res.data}))
    .catch((err) => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (user) => {
    console.log(user)
    this.toggle();
    if (user.id) {
      axios
        .put(`/api/users/${user.id}/`, user)
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post("/api/users/", user)
      .then((res) => this.refreshList());
  };

  handleDelete = (user) => {
    axios
      .delete(`/api/todos/${user.id}/`)
      .then((res) => this.refreshList());
  };

  createUser = () => {
    const user = { first_name: "", last_name: "", email:"",riding: "",stance: "" };

    this.setState({ activeUser: user, modal: !this.state.modal });
  };

  editItem = (user) => {
    this.setState({ activeUser: user, modal: !this.state.modal });
  };

  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }

    return this.setState({ viewCompleted: false });
  };

  renderUserList = () => {
    return (
      <div className="nav nav-tabs">
        <span
          className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
          onClick={() => this.displayCompleted(true)}
        >
          Complete
        </span>
        <span
          className={this.state.viewCompleted ? "nav-link" : "nav-link active"}
          onClick={() => this.displayCompleted(false)}
        >
          Incomplete
        </span>
      </div>
    );
  };

  renderUsers = () => {
    const { viewCompleted } = this.state;
    const newUsers = this.state.userList.filter(
      (user) => user.completed === viewCompleted
    );

    return newUsers.map((user) => (
      <li
        key={user.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2 ${
            this.state.viewCompleted ? "completed-todo" : ""
          }`}
          title={user.last_name}
        >
          {user.last_name}
        </span>
        <span>
          <button
            className="btn btn-secondary mr-2"
            onClick={() => this.editItem(user)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.handleDelete(user)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">Shred App</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button
                  className="btn btn-primary"
                  onClick={this.createUser}
                >
                  Add User
                </button>
              </div>
              {this.renderUserList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderUsers()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeUser={this.state.activeUser}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}

export default App;