import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, minLength: 1, maxLength: 20 },
    description: {
      type: String,
      required: false,
      minength: 1,
      maxLength: 1000,
    },
    status: {
      type: String,
      required: true,
      enum: ["Pending", "In Progress", "Done"],
      default: "Pending",
    },
    priority: {
      type: String,
      required: true,
      enum: ["Low", "Medium", "High"],
    },
    dueDate: {
      type: Date,
      required: false,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("Task", taskSchema, "tasks");
