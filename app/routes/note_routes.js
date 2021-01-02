const db = require("../../config/db");
var ObjectID = require("mongodb").ObjectID;

//CREATE
// module.exports = function (app, db) {
//   const collection = app.post("/notes", (req, res) => {
//     const note = { text: req.body.body, title: req.body.title };
//     db.collection("notes").insert(note, (err, result) => {
//       if (err) {
//         res.send("An error has occurred.");
//       } else {
//         res.send(result.ops[0]);
//       }
//     });
//   });
// };

//READ

module.exports = function (app, db) {
  app.get("/notes/:id", (req, res) => {
    const id = req.params.id;
    const details = { " _id": new ObjectID(id) };
    db.collection("notes").findOne(details, (err, item) => {
      if (err) {
        return res.send({ error: "an error has ocurred." });
      } else {
        return res.send(item);
      }
    });
  });

  app.post("/notes", (req, res) => {
    const note = {
      text: req.body.body,
      title: req.body.title,
    };

    db.collection("notes").insert(note, (err, result) => {
      if (err) {
        return res.send({ error: "an error has occurred." });
      } else {
        return res.send(result.ops[0]);
      }
    });
  });
};
