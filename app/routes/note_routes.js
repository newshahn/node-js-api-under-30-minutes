module.exports = function (app, db) {
  const collection = app.post("/notes", (req, res) => {
    const note = { text: req.body.body, title: req.body.title };
    db.collection("notes").insert(note, (err, result) => {
      if (err) {
        res.send("An error has occurred.");
      } else {
        res.send(result.ops[0]);
      }
    });
    // console.log(req.body);
    // res.send("Hello");
  });
};
