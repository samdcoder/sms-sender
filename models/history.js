const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
	_id: {type: mongoose.Schema.Types.ObjectId,  ref: 'Id'},
	firstName: String,
	lastName: String, 
	otp: String
	}, 
	{timestamps: true}
);

module.exports = mongoose.model('History', historySchema);

