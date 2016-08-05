var express = require('express');
var router = express.Router();

var Pick = require('../models/pick');

router.get('/', function(req, res) {
	Pick.find(function(err, picks) {
		if (err) return res.send(err);

		res.json(picks);
	});
});

router.post('/add', function(req, res) {
	var pick = new Pick();

	console.log(req.body);

	pick.title = req.body.pick.title;
	pick.description = req.body.pick.description;
	// changing to "https" seems to reduce cross-site issues
	pick.image_url = req.body.pick.image_url;
	pick.display_name = req.body.user.display_name;
	pick.user_id = req.body.user.user_id;

	pick.save(function(err) {
		if (err) return res.send(err);

		res.json(pick);
	});
});

module.exports = router;