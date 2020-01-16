import React from "react";
import Modal from "react-modal";
import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class addContact extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      name: "",
      email: "",
      tel: null,
      img:
        "https://cdn4.iconfinder.com/data/icons/man-and-woman/154/man-human-person-login-512.png"
    };

    this.openModal = this.openModal.bind(this);

    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="addModal">
        <i onClick={this.openModal} class="fas fa-user-plus"></i>
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
          <h1
            ref={subtitle => (this.subtitle = subtitle)}
            style={{ color: " #ff5050", textAlign: "center" }}
          >
            ADD CONTACT
          </h1>

          <form className="formAdd">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline"
              }}
            >
              <span style={{ color: "#b8b894" }}>image:</span>

              <input
                placeholder="imgage"
                className="inputform"
                onChange={e => {
                  this.setState({ img: e.target.value });
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline"
              }}
            >
              <span style={{ color: "#b8b894" }}> Name:</span>
              <input
                placeholder="Enter the name"
                className="inputform"
                onChange={e => {
                  this.setState({ name: e.target.value });
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline"
              }}
            >
              <span style={{ color: "#b8b894" }}>Email:</span>
              <input
                placeholder="Enter the email"
                className="inputform"
                onChange={e => {
                  this.setState({ email: e.target.value });
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline"
              }}
            >
              <span style={{ color: "#b8b894" }}>Tel:</span>
              <input
                placeholder="Enter Number of telephone"
                className="inputform"
                onChange={e => {
                  this.setState({ tel: e.target.value });
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: "50px"
              }}
            >
              <button
                class="btn btn-success"
                onClick={() => {
                  axios.post("/new_contact", this.state);
                }}
              >
                Save Contact
              </button>
              <button
                class="btn btn-danger"
                onClick={this.closeModal}
                style={{ marginLeft: "20px" }}
              >
                close
              </button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default addContact;
