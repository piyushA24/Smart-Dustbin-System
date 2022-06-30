const mongoose = require("mongoose");
const autoIncrement = require("mongoose-sequence")(mongoose);

const vanSchema = new mongoose.Schema({
  VanId: {
    type: Number,
  },
  DriverName: {
    type: String,
    required: true,
  },
  mailId: {
    type: String,
    required: true,
  },
  Cnt: {
    type: Number,
  },
});

vanSchema.plugin(autoIncrement, { inc_field: "VanId" });
const newVan = mongoose.model("newVan", vanSchema);

module.exports = newVan;
