const mongoose = require("mongoose");

//Connection mongoosedb with my mongodb account

const connectDB = (url) => {
  return mongoose.connect(url, {
    //Creating custom errors and removing long message on console
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
