const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/recipeSharingDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
