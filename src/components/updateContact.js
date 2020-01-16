import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class updateContact extends Component {
  constructor() {
    super();

    this.state = {
      contact: {}
    };
  }

  componentDidMount = () => {
    this.getcontact();
  };
  getcontact = () => {
    axios.get(`/contact/${this.props.id}`).then(res => {
      this.setState({
        contact: res.data
      });
    });
  };

  render() {
    return (
      <div>
        <form className="formEdit">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline"
            }}
          >
            <span style={{ color: "#b8b894" }}>image:</span>
            <input
              value={this.state.contact.img}
              className="inputform"
              onChange={e => {
                this.setState({
                  contact: { ...this.state.contact, img: e.target.value }
                });
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
            <span style={{ color: "#b8b894" }}>name:</span>
            <input
              value={this.state.contact.name}
              className="inputform"
              onChange={e => {
                this.setState({
                  contact: { ...this.state.contact, name: e.target.value }
                });
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
            <span style={{ color: "#b8b894" }}>email:</span>
            <input
              className="inputform"
              value={this.state.contact.email}
              onChange={e => {
                this.setState({
                  contact: { ...this.state.contact, email: e.target.value }
                });
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
            <span style={{ color: "#b8b894" }}>telephone:</span>
            <input
              className="inputform"
              value={this.state.contact.tel}
              onChange={e => {
                this.setState({
                  contact: { ...this.state.contact, tel: e.target.value }
                });
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              margin: "50px 20px"
            }}
          >
            <Link to="/">
              <button
                class="btn btn-success"
                onClick={() => {
                  axios.put(`/modify_contact/${this.state.contact._id}`, {
                    img: this.state.contact.img,
                    name: this.state.contact.name,
                    email: this.state.contact.email,
                    tel: this.state.contact.tel
                  });
                }}
              >
                Update contact
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
