import Task from "../models/Task.js";
import User from "../models/User.js";

class TaskController {
  static createTask = async (req, res) => {
    try {
      // Validate error scenarios
      const { title, description, status, priority, dueDate, userId } =
        req.body;
      const newTask = await Task.create({
        title,
        description,
        status,
        priority,
        dueDate,
        userId,
      });
      const taskUser = await User.findById(userId, "name email");

      console.log(`Task "${title} has been created!"`);
      res.status(201).json({ newTask, taskUser: taskUser });
    } catch (error) {
      console.error(`Failed to create task, ${error.message}`);
      res
        .status(400)
        .json({ message: "Failed to create task...", error: error.message });
    }
  };
}

export default TaskController;
