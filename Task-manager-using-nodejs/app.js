const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/task");
require("dotenv").config();
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/errorHandler')
//middleware
app.use(express.static('./public'));
app.use(express.json())

//Creating dommy get route for Heroku
app.get('/', (req, res) =>{
  res.send('Task manager')
})


//create pages
app.use("/api/v1/tasks", tasks);

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`server is listening on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
