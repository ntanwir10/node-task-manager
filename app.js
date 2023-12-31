const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");

const notFound = require("./middleware/not-found");
const errorHandlerMidlleware = require("./middleware/error-handler");

require("dotenv").config();

// middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandlerMidlleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on ${port}...`));
  } catch (error) {
    console.error();
  }
};

start();
