var express = require('express');
var router = express.Router();

var Pick = require('../models/pick');
var User = require('../models/user');

router.get('/', function(req, res) {
	Pick.find(function(err, picks) {
		if (err) return res.send(err);

		res.json(picks);
	});
});

router.get('/user/:user_id', function(req, res) {
	
	var userId = req.params.user_id;
		User.findOne({ _id: userId }, function(err, user) {
			if (err) return res.send(err);
			
			var displayName = user.display_name;
			
			Pick.find({ user_id: userId }, function(err, picks) {
				if (err) return res.send(err);
			
				res.json({
					picks: picks,
					display_name: displayName
				});
			});
		});
			
});

router.post('/add', function(req, res) {
	console.log(req.body);
	
	var pick = new Pick({
		title: req.body.pick.title,
		description: req.body.pick.description,
		image_url: req.body.pick.image_url,
		display_name: req.body.user.display_name,
	  user_id: req.body.user.id,
		profile_image: req.body.user.profile_img
	});

	pick.save(function(err) {
		if (err) return res.send(err);

		res.json(pick);
	});
});

router.post('/:id/update_like', function(req, res) {
	var pickId = req.params.id;
	
	Pick.findById({ _id: pickId }, function(err, pick) {
		if (err) return res.send(err);
		
		pick.likes = req.body.likes;
		
		pick.save(function(err) {
			if (err) return res.send(err);
			
			res.json({
				message: 'Likes updated to ' + pick.likes
			});
		});
	});
});

module.exports = router;