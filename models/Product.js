const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const productSchema = new Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 30
  },
  description: {
    type: String,
    minlength: 3,
    maxlength: 254
  },
});

module.exports = mongoose.model('Product', productSchema);