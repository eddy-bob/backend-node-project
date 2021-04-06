const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan");
const colors = require("colors");
const handleError = require("./middleware/error");
// load dotenv
dotenv.config({ path: "./config/config.env" });

const port = process.env.PORT || 5000;
const enviroment = process.env.NODE_ENV;
const app = express();
const bootcamp = require("./routes/bootcamps.js");
// const logger=require('./middleware/logger')

app.use(morgan);
connectDB();
app.use(express.json());
app.use("/api/v1/bootcamps", bootcamp);
app.use(handleError);


const server = app.listen(
  port,
  console.log(`server running at port ${port} in mode ${enviroment} `)
);
// close the server if there  is an error and display the error
process.on("unhandledRejection", (err) => {
  console.log(`error:${err.message}`), server.close(process.exit(1));
});
