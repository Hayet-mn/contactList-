import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import ContactList from "./components/contactList";

import UpdateContact from "./components/updateContact";
import Header from "./components/header";

import "./App.css";

export default class app extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#d6d6c2" }}>
        <Router>
          <Header />

          <Route exact path="/" render={() => <ContactList />} />

          <Route
            path="/updateContact/:id"
            render={props => <UpdateContact id={props.match.params.id} />}
          />
        </Router>
      </div>
    );
  }
}
