// sending data to the database
const bootcamp = require("../models/Bootcamps");
exports.createbootcamps = async (res, req) => {
  try {
    const bootcamp = await bootcamp.create(req.body);
    res
      .status(201)
      .json({ success: true, data: bootcamp, counts: bootcamps.length });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
  }
};
exports.getbootcamp = async (res, req) => {
  try {
    const bootcamp = await bootcamp.findById(req.params.id);
    res
      .status(200)
      .json({ new: true, runValidators: true, success: true, data: bootcamp });
    if (!bootcamp) {
      return res.status(400).json({ success: false, data: "" });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      Error: error,
    });
  }
};
exports.updatebootcamp = async (res, req) => {
  try {
    const bootcamp = await bootcamp.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ success: true, data: bootcamp });
    if (!bootcamp) {
      return res.status(400).json({ success: false, data: {} });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      Error: error,
    });
  }
};
exports.deletebootcamp = async (res, req) => {
  try {
    const bootcamp = await bootcamp.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, data: bootcamp });
    if (!bootcamp) {
      return res.status(400).json({ success: false, data: {} });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      Error: error,
    });
  }
};
exports.getallbootcamps = async (res, req) => {
  try {
    const bootcamps = await bootcamp.find();
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      Error: error,
    });
  }
};
