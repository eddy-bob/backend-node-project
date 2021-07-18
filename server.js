const express = require("express");
const userRoute = require("./routes/routes");
// const connectDB = require("./config/db");
const morgan = require("morgan");
const colors = require("colors");
const handleError = require("./middleware/error");
// load dotenv

const app = express();
const bootcamp = require("./controllers/bootcamps.js");
// const logger=require('./middleware/logger')
if (process.env.NODE_ENV === "developement") {
  app.use(morgan("dev"));
}
// connectDB();
app.use(express.json());

app.use("/api/v1/bootcamps", userRoute);
// app.use(handleError);
const { config } = require("dotenv");
config({ path: ".env" });

const port = process.env.PORT;
const enviroment = process.env.NODE_ENV;

const server = app.listen(
  port,
  console.log(
    `server running at port ${port} in mode ${enviroment} `.blue.underline
  )
);
// close the server if there  is an error and display the error
process.on("unhandledRejection", (err) => {
  console.log(`error:${err.message}`), server.close(process.exit(1));
});
