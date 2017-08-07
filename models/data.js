var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var dataSchema = new Schema({
  // id: Number
  id : String
});

var dataModel = mongoose.model("data", dataSchema);

module.exports = dataModel;
