const Task = require("../models/Tasks");
const asyncWrapper = require('../middleware/async')
const { createCustomError} = require('../errors/custom-errors')



//Get all the Tasks
const getAllTasks = asyncWrapper( async (req, res) => {  
    const tasks = await Task.find({});
    res.status(200).json({ tasks });

});

//Create a task
const createTasks = asyncWrapper( async (req, res) => {
    const task = await Task.create(req.body);
    // send in strings
    res.status(201).json({ task });
 
});

//Get a single Tasks
const getTasks = asyncWrapper( async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    //check and returns if their is not task
    if (!task) {
      return next(createCustomError(`No task with ID: ${taskID}`), 404)
      
    }

    res.status(200).json({ task });
  
  // send in strings
});

//Delete a tasks
const deleteTasks = asyncWrapper( async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return next(createCustomError(`No task with ID: ${taskID}`), 404)
    }
    res.status(200).json({ task });
 
  // send in strings
});

//Update a task
const updateTasks = asyncWrapper( async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return next(createCustomError(`No task with ID: ${taskID}`), 404)
    }

    res.status(200).json({});
 
  // send in strings
  res.send("update single task");
});



module.exports = {
  getAllTasks,
  getTasks,
  createTasks,
  updateTasks,
  deleteTasks,
};
