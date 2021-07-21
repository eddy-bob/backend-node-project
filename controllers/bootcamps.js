const fs = require("fs");
const customError = require("../helpers/customError");

//create single user
// @route :/api/v1/bootcamps/createUser
exports.createUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email && !password) {
      return next(new customError(400, "email or passoword not provided "));
    } else {
      await fs.appendFile("users.txt", `\n${email}\n${password}`, (err) => {
        if (err) {
          next(new customError(500, "couldnt add to databases "));
        }
      });
    }
    res.status(200).json({ success: true, data: [email, password] });
  } catch (err) {
    next(new customError(404, "failed"));
  }
};
// get users users
// @route :/api/v1/bootcamps/getUsers
exports.getUsers = async (req, res, next) => {
  try {
    fs.readFile("users.txt", (err, users) => {
      const data = users.toString();
      let realData;
      if (data.includes("\n")) {
        realData = data.replaceAll("\n", "");
      }
      if (!users) {
        next(new customError(404, "database empty "));
      }
      res.status(200).json({ success: true, data: [realData] });
    });
  } catch (err) {
    next(new customError(400, "failed "));
  }
};
exports.deleteUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return next(new customError(404, "email or password not included"));
    }
    fs.readFile("users.txt", (err, users) => {
      if (!users) {
        next(new customError(404, "database empty "));
      }
      const data = users.toString().replaceAll("\n", "");
      if (data.includes(`${email}${password}`)) {
        const newData = data.replace(`${email}${password}`, "");
        fs.writeFile("users.txt", newData, (err) => {
          if (err) throw err;
        });
        res.status(200).json({
          success: true,
          data: `${email} and ${password} removed from database`,
          newData: newData,
        });
      } else {
        next(new customError(404, "user not found "));
      }
    });
  } catch (err) {
    next(new customError(400, "request failed "));
  }
};
exports.updateUser = async (req, res, next) => {
  const Id = req.params._id;

  try {
    if (!Id) {
      return next(new customError(400, "id not included "));
    }
    fs.readFile("users.txt", (err, users) => {
      if (!users) {
        next(new customError(404, "database empty "));
      }
      const data = users.toString().replaceAll("\n", "");
      if (data.includes(`${Id}`)) {
        const newData = data.replace(
          `${Id}`,
          `${JSON.stringify(req.body.email)}`
        );
        fs.writeFile("users.txt", newData, (err) => {
          if (err) throw err;
        });
        res.status(200).json({
          success: true,
          data: `${req.body.email} updated to database`,
          newData: newData,
        });
      } else {
        console.log(`${req.params._id}`);
        next(new customError(404, "user not found "));
      }
    });
  } catch (err) {
    next(new customError(400, "failed"));
  }
};
