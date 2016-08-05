angular.module('toppiksApp')
	.controller('AddPickCtrl', ['$scope', 'pickFactory', '$location', '$rootScope',
		function($scope, pickFactory, $location, $rootScope) {
			$scope.addPick = function() {
		  var currentUser = $rootScope.currentUser;

				pickFactory.addPick({
					pick: $scope.pick,
					user: {
						display_name: currentUser.display_name,
						user_id: currentUser.user_id
					}
				})
				.success(function(result) {
					// console.log(result);
					$location.url('/');
				});
			};
}]);