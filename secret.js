const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config({ path: "./.env" });

function writeNewData(key, value, newValue) {
  const newData = ` ${newValue} \n ${key}=${value}`;
  const err = fs.writeFileSync(".env", newData);
  if (err) throw err;
  console.log(
    `new values appended to .env file.\n updated value is :${newData}`
  );
}
function removeOldData(key, data) {
  const value = process.env[key];

  oldData = `${key}=${value}`;
  const newValue = data.toString();

  const newFormatedValue = newValue.replace(oldData, "");
  console.log("newly formatted vaules:" + newFormatedValue);
  writeNewData(key, value, newFormatedValue);
}
function reReadFile(key, value, data) {
  if (data.includes(key)) {
    removeOldData(key, data);
  } else {
    const err = fs.appendFileSync(".env", ` \n ${key}=${value}`);
    if (err) throw err;
  }
}

function createFileAndAppendIt(key, value) {
  if (key === "NODE_ENV") {
    const plainKey = key.split("_").join("").toString().toLowerCase();
    console.log(`${plainKey} has value of ${value}`);
  } else {
    console.log(`${key} has value of ${value}`);
  }
  fs.readFile(".env", (err, data) => {
    if (!data) {
      console.log(
        "no data available form reading .env.creating a new file with new values"
      );
      const err = fs.appendFileSync(".env", `${key}=${value}`);

      console.log("filecreated");
    } else {
      reReadFile(key, value, data);
    }
  });
}

if (process.argv[2] === "dotenv") {
  createFileAndAppendIt("PORT", "5000");
} else {
  console.log("no second argument provided");
}
