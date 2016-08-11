angular.module('toppiksApp')
	.factory('pickFactory', ['$http', function($http) {
		var pickFactory = {};
		var data = {};

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
		
		pickFactory.deletePick = function(pickId) {
			console.log(pickId);
			
			return $http.post('/api/picks/' + pickId + '/delete')
			.success(function(result) {
				console.log(result);
				console.log('pick was deleted!');
			})
			.error(function(err) {
				console.log(err);
			});
		};

		return pickFactory;
	}]);