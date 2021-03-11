const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./users");
db.share = require("./shares");
db.pharmacy = require("./pharmacy");
db.board = require("./board");

module.exports = db;
