angular.module('toppiksApp')
	.controller('AddPickCtrl', [
		'$scope',
		'pickFactory', 
		'$location',
		'$rootScope',
		function($scope, pickFactory, $location, $rootScope) {
			var currentUser = $rootScope.currentUser;
			
			$scope.addPick = function() {
				pickFactory.addPick({
					pick: $scope.pick,
					user: currentUser
				})
				.success(function(result) {
					$location.url('/');
				});
			};
}]);