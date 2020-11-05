const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {
		type:String,
		required: [true, "Name is required"],
		minlength:[1,"Name must be at least 1 character long"],
	},
	email: {
		type:String,
		required: [true, "Email is required"],
		minlength:[1,"email must be at least 1 character long"],
	},
	phone: {
		type:String,
		required: [true, "Phone Number is required"],
		minlength:[10,"Phone number must be at least 10 characters long and include zipcode"],
	},
	address: {
		type:String,
		required: [true, "address is required"],
		minlength:[5,"address must be at least 5 characters long"],
	},
	status: {
		type:Boolean,
	},
	
});

const User = mongoose.model("User", UserSchema);

module.exports = User;