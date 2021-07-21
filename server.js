const express = require("express");
const userRoute = require("./routes/routes");
// const connectDB = require("./config/db");
const morgan = require("morgan");
const colors = require("colors");
const errorHandler = require("./middleware/error");

const app = express();

const { config } = require("dotenv");
config({ path: ".env" });

if (process.env.NODE_ENV === "developement") {
  app.use(morgan("dev"));
}
app.use(express.json());

const bootcamp = require("./controllers/bootcamps.js");
app.use("/api/v1/bootcamps", userRoute);

app.use(errorHandler);

connectDB()

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
