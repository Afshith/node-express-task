import express from "express";
import tasksRoutes from "./routes/tasksRoutes.js"; 
import connectDB from "./db/connection.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('./public'));


app.get('/hello', (req, res) => {
    res.json({ message: "hello from localhost 3000" }); 
});

app.use('/api/v1/tasks', tasksRoutes);

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`The server is listening on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();
