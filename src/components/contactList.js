import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddContact from "./addContact";

export default class contactlist extends Component {
  state = {
    list: []
  };
  componentWillMount = () => {
    this.getcontact();
  };
  getcontact = () => {
    axios.get("/contactList").then(res => {
      this.setState({
        list: res.data
      });
    });
  };
  render() {
    return (
      <div className="list">
        {this.state.list.map(el => (
          <div class="card">
            <img src={el.img} className="cardImg" />
            <div class="card-body" style={{ textAlign: "center" }}>
              <h3 style={{ color: " #ff5050" }}> {el.name}</h3>
              <p style={{ color: "gray" }}> {el.email} </p>
              <p style={{ color: "gray" }}> {el.tel} </p>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Link to={`/updateContact/${el._id}`}>
                  <button class="btn btn-secondary">Update</button>
                </Link>
                <button
                  onClick={() => {
                    axios
                      .delete(`/delete_contact/${el._id}`)
                      .then(this.getcontact);
                  }}
                  class="btn btn-secondary"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="addContact">
          <AddContact />
        </div>
      </div>
    );
  }
}
