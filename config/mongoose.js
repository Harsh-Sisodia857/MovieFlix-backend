const mongoose = require('mongoose');

const db = mongoose.connect("mongodb://localhost/Movieflix")
.then(() => console.log("CONNECTED TO THE DB"))
.catch(err => console.log("ERROR CONNECTING TO THE DB"))

module.exports = db;