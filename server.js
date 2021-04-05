const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan");
// load dotenv
dotenv.config({ path: "./config/config.env" });

const port = process.env.PORT || 5000;
const enviroment = process.env.NODE_ENV;
const app = express();
const bootcamp = require("./routes/bootcamps.js");
// const logger=require('./middleware/logger')
// to send back a response wnen a person fires a get request from a front end app to a slash router
app.use("/api/v1/bootcamps", bootcamp);
// body parser
app.use(express.json());
// set a middle ware so that when ever i make a command,it runs
connectDB;
app.use(morgan);
const server = app.listen(
  port,
  console.log(`server running at port ${port} in mode ${enviroment} `)
);
// close the server if there  is an error and display the error
process.on("unhandledRejection", (err, promise) => {
  console.log(`error:${err.message}`), server.close(process.exit(1));
});
