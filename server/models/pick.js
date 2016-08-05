var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pickSchema = new Schema({
	title: String,
	description: String,
	image_url: String,
	user_id: String,
	display_name: String,
	likes: {
		type: Number,
		default: 0
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Pick', pickSchema);