angular.module('toppiksApp')
	.factory('pickFactory', ['$http', function($http) {
		var pickFactory = {};

		pickFactory.getPicks = function() {
			return $http.get('/api/picks')
				.success(function(results) {
					data = results;
					return data;
				})
				.error(function(err) {
					console.log(err);
				});
		};

		pickFactory.addPick = function(pickData) {
			return $http.post('/api/picks/add', pickData)
			.success(function(result) {
				data = result;
				return data;
			})
			.error(function(err) {
				console.log(err);
			});
		};

		return pickFactory;
	}]);