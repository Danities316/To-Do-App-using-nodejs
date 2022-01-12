const mongoose = require("mongoose");

//Creating models on mongoosedb
// Two models - name and completed
// include validation on the two models
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide name"],
    trim: true,
    maxLength: [20, "Name cannot be more than 20 charaecters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
