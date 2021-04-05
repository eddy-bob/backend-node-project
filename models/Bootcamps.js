const mongoose = require("mongoose");

const bootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please type in your name"],
    unique: [true, "no two bootcamp can have thesame name"],
    trim: true,
    maxlength: [50, "bootcamp can not have more than 50 characters"],
    slug:String
  },
  
  description: {
    type: String,
    required: [true, "please add a discription"],
    maxlength: [500, "bootcamp can not have more than 500 characters"],
  },
  website: {
    match: [
     "javascript - regex - url",
      "please use a valid URL with http or https",
    ],
  },
  phone: {
    type: String,
    maxlength: [20, "email can not be more than 20 characters"],
  },
  email: {
    match: [
      "javascript - regex - email",
      "please use a vaid email  with @gmail.com or yahoo.com",
    ],
  },
  address: {
    type: String,
    required: [true, "please type in an address"],
  },
  // GEOjson point
  location: {
    type: {
      type: String,
      enum: ["point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
      index: "2dsphere",
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    country: String,
    zipcode: String,
  },
  careers: {
    type: [String],
    required: true,
    enum: [
      "web development",
      "app development",
      "UI/UX",
      "data science",
      "business",
      "others",
    ],
  },
  averageRating: {
    type: Number,
    min: [1, "rating ,must be atleast 1"],
    max: [10, "rating must not be more than 10"],
  },
  averageCost: Number,
  photo: {
    type: String,
    default: "no-photo.jpg",
  },
  jobGuarantee: {
    type: Boolean,
    defualt: false,
    housing: {
      type: Boolean,
      defualt: false,
    },
    jobAssistance: {
      type: Boolean,
      defualt: false,
    },
    
    acceptGi: {
      type: Boolean,
      defualt: false,
    },
  },
  acceptGi: {
    type: Boolean,
    defualt: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports=mongoose.model('bootcamps',bootcampSchema)