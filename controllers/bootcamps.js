const fs = require("fs");
//create single user
// @route :/api/v1/bootcamps/createUser
exports.createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const error = fs.appendFileSync(
      "../localDatabase/users",
      `${email}\n${password}`
    );
    res.status(200).json({ success: true, data: [email, password] });
    if (error) {
      throw error;
    }
  } catch (error) {
    res.status(400).json({ success: false, data: null, Error: error });
  }
};
// get users users
// @route :/api/v1/bootcamps/getUsers
exports.getUsers = async (req, res) => {
  try {
    const users = fs.readFileSync("../localDatabase/users");
    res.status(200).json({ success: true, data: user.data });
    if (user.error) {
      throw error;
    }
  } catch (error) {
    res.status(400).json({ success: false, data: null, Error: error });
  }
};
