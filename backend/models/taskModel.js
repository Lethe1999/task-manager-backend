const mongoose = require("mongoose");

// Create a schema with auto updated timestamps
const taskSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add a name"],
        },
        completed: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;