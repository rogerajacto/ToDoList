require ('dotenv').config();

const express = require ('express');
const cors =  require ('cors');

const taksRouter = require('../src/routes/tasksRoute');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/tasks", taksRouter);

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});