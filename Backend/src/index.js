require ('dotenv').config();

const express = require ('express');


const taksRouter = require('../src/routes/tasksRoute');
const usersRoute  = require('../src/routes/usersRoute');



const cors =  require ('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/tasks", taksRouter);
app.use('/users', usersRoute);

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});