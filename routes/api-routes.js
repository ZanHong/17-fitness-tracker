const db = require("../models");

module.exports = app => {
  // Get workout
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .sort({ day: 1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err)
      });
  });

  // Add exercise
  app.put("/api/workouts/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    console.log(req.body.duration);
    db.Workout.findByIdAndUpdate({
      _id: req.params.id
    }, {
      $push: { exercises: req.body },
      $inc: { totalDuration: req.body.duration }
    })
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