const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const infoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("infos", infoSchema);
