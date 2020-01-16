const express = require("express");
const { MongoClient, ObjectID } = require("mongodb");
const bodyParser = require("body-parser");
const assert = require("assert");

const app = express();

app.use(bodyParser.json());

//definition  dataBase

const mongo_url = "mongodb://localhost:27017";
const dataBase = "contactList";

MongoClient.connect(mongo_url, (err, client) => {
  assert.equal(err, null, "data base connexion failed");

  const db = client.db(dataBase);

  // add contact  document to collection in database
  app.post("/new_contact", (req, res) => {
    let newContact = req.body;
    db.collection("contacts").insertOne(newContact, (err, data) => {
      if (err) res.send("cannot add contact");
      else res.send(data);
    });
  });

  // return all contacts in collection
  app.get("/contactList", (req, res) => {
    db.collection("contacts")
      .find()
      .toArray((err, data) => {
        if (err) res.send("cannot fetch contacts");
        else res.send(data);
      });
  });
  // return one contact by id in collection
  app.get("/contact/:id", (req, res) => {
    let searchedContactID = ObjectID(req.params.id);
    db.collection("contacts").findOne(
      { _id: searchedContactID },
      (err, data) => {
        if (err) res.send("cannot fetch contact");
        else res.send(data);
      }
    );
  });
  // update contact exist by id
  app.put("/modify_contact/:id", (req, res) => {
    let ContactToEditId = ObjectID(req.params.id);
    let modifiedContact = req.body;
    db.collection("contacts").findOneAndUpdate(
      { _id: ContactToEditId },
      { $set: { ...modifiedContact } },
      (err, data) => {
        if (err) res.send("cannot modify contact");
        else res.send("contact was modified");
      }
    );
  });

  // delete contact exist by id
  app.delete("/delete_contact/:id", (req, res) => {
    let contactToRemoveId = ObjectID(req.params.id);
    db.collection("contacts").findOneAndDelete(
      { _id: contactToRemoveId },
      (err, data) => {
        if (err) res.send("cannot delete contact");
        else res.send("contact was deleted");
      }
    );
  });
});
//run sever
app.listen(5000, err => {
  if (err) console.log("server error");
  else console.log("server  is running on port 5000");
});
