// sending data to the database
const bootcamp = require("../models/Bootcamps");
exports.createbootcamps = async (res, req, next) => {
  try {
    const bootcamp = await bootcamp.create(req.body);
    res
      .status(201)
      .json({ success: true, data: bootcamp, counts: bootcamps.length });
  } catch (error) {
    // console.log({ Error: error });
    //  res.status(400).json({
    //  success: false,
    //  });
    next(error);
  }
};
exports.getbootcamp = async (res, req, next) => {
  try {
    const bootcamp = await bootcamp.findById(req.params.id);
    res
      .status(200)
      .json({ new: true, runValidators: true, success: true, data: bootcamp });
    if (!bootcamp) {
      return res.status(400).json({ success: false, data: "" });
    }
  } catch (error) {
    next(error);
  }
};
exports.updatebootcamp = async (res, req, next) => {
  try {
    const bootcamp = await bootcamp.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ success: true, data: bootcamp });
    if (!bootcamp) {
      return res.status(400).json({ success: false, data: {} });
    }
  } catch (error) {
    next(error)
  }
};
exports.deletebootcamp = async (res, req, next) => {
  try {
    const bootcamp = await bootcamp.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, data: bootcamp });
    if (!bootcamp) {
      return res.status(400).json({ success: false, data: {} });
    }
  } catch (error) {
   next(error)
  }
};
exports.getallbootcamps = async (res, req, next) => {
  try {
    const bootcamps = await bootcamp.find();
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    next(error);
  }
};
