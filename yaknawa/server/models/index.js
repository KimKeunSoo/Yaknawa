const db = {};

db.user = require("./user.model");
db.share = require("./share.model");
db.pharmacy = require("./pharmacy.model");
db.board = require("./board.model");

module.exports = db;
