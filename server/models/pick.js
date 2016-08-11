var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');

var pickSchema = new Schema({
	_id: {
		type: String,
		'default': shortid.generate	
	},
	title: String,
	description: String,
	image_url: String,
	profile_image: {
		type: String,
		default: null
	},
	user_id: String,
	display_name: String,
	likes: {
		type: Number,
		default: 0
	},
	isLiked: { // flag to individually toggle "like" icon
		type: Boolean,
		default: false
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Pick', pickSchema);