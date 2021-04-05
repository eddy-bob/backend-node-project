const express = require("express");
const router = express.Router();
const {
  getallbootcamps,
  getbootcamp,
  updatebootcamp,
  deletebootcamp,
} = require("../controllers/bootcamps");
// router.get("/api/v1/bootcamps", (req, res) => {
//   res.send(
//     "pass in what ever you want the requester to get from the request he or she sent"
//   );
// });
// if you want to send back an object,you replace the send to json
// router.get("/api/v1/bootcamps", (req, res) => {
//     res.json(
//         "pass in what ever you want the requester to get for sending the request"
//     )
// });
// if you want o change the status code and still send back a reply

router.route("/").get(getallbootcamps).post(getallbootcamps);
router
  .route("/:id")
  .get(getbootcamp)
  .put(updatebootcamp)
  .delete(deletebootcamp);

module.exports = router;
