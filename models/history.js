const mongoose = require('mongoose');

const historySchema = mongoose.Schema({
	_id: {type: mongoose.Schema.Types.ObjectId,  ref: 'Id'},
	firstName: String,
	lastName: String, 
	otp: String, 
	sent_at: { type : Date, default: Date.now }
});

module.exports = mongoose.model('History', userSchema);

