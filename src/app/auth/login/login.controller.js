angular.module('toppiksApp')
	.controller('LoginCtrl', [
	'$scope',
	'$auth',
	'$window',
	'$rootScope',
	'$location',
	function($scope, $auth, $window, $rootScope, $location) {
		
		$scope.emailLogin = function() {
	 		$auth.login({
	 			email: $scope.email, 
	 			password: $scope.password 
	 		})
	 		.then(function(response) {
	 			$window.localStorage.currentUser = JSON.stringify({
	 			  display_name: response.data.user.display_name,
	 				profile_img: response.data.user.profile_img,
	 				id: response.data.user.id
	 			});
	 			$rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
	 		})
	 		.catch(function(response) {
	 			console.log(response);
	 		});
	 		
	 		$scope.email = '';
	 		$scope.password = '';
	 		
	 		$location.url('/');
	};

	$scope.twitterLogin = function() {
 		$auth.authenticate('twitter')
 			.then(function(response) {
 				$window.localStorage.currentUser = JSON.stringify(response.data.user);
 				$rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
 				$location.url('/');
 			})
 			.catch(function(response) {
 				console.log(response.data);
 			});
 	};

}]);


	