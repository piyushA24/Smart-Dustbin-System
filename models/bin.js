const mongoose = require("mongoose");
const autoIncrement = require("mongoose-sequence")(mongoose);

const binSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
    },
    Location: {
      type: String,
      required: true,
    },
    VanID: {
      type: String,
      required: true,
    },
    Type: {
      type: String,
    },
    perFilled: {
      type: String,
    },
  },
  { _id: false }
);

binSchema.plugin(autoIncrement);
const newBin = mongoose.model("newBin", binSchema);

module.exports = newBin;
