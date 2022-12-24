const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const taskRouter = require("./routes/taskRoute");
const cors = require("cors");

// Create a server
const app = express();

app.use(cors({
    origin: ["http://localhost:3000", "https://vandark-task-manager.onrender.com"],
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Routes
app.get("/", (req, res) => {
    res.send("Home page");
});
app.use("/api/tasks", taskRouter);

// Start server. Connect to the database first
const PORT = process.env.PORT || 5001;
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server on port ${PORT}`);
        });
    })
    .catch(error => console.log(error))



// Another way to start a server asynchronously
// 
// const connectDB = require("./config/connectDB");
// const startServer = async () => {
    //     try {
//         await connectDB();
//         app.listen(PORT, () => {
//             console.log(`Server port on ${PORT}`);
//         })
//     } catch (error) {
//         console.log(error);
//     }
// };
// startServer();