const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
	name: String,
	
}, {timestamps: true});

const User = mongoose.model("User", AuthorSchema);

module.exports = User;