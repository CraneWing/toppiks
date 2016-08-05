angular.module('toppiksApp')
	.controller('HomeCtrl', ['$scope', '$http',
		function($scope, $http) {
			$http.get('/api/picks')
				.success(function(results) {
					$scope.picks = results;
				});

}]);