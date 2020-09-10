const db = require("../models");

module.exports = app => {
  // Get workout
  app.get("/api/workout", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err)
      });
  });

  // Create workout
  // app.post("/api/workout", (req, res) => {
  //   db.Workout.create({})
  //     .then(dbWorkout => {
  //       res.json(dbWorkout);
  //     })
  //     .catch(err => {
  //       res.status(400).json(err);
  //     });
  // })
}