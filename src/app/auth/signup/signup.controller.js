angular.module('toppiksApp')
	.controller('SignupCtrl', ['$scope', '$auth', '$location', 
	function($scope, $auth, $location) {
		
		$scope.signup = function() {
	 		var user = {
	 			email: $scope.email,
	 			password: $scope.password,
	 			display_name: $scope.display_name
	 		};

	 		$auth.signup(user)
	 			.then(function(response) {
	 				console.log(response.data);
	 			})
	 			.catch(function(response) {
  	 			console.log(response);
	 		 });
	 			
	 	 $scope.email = '';
		 $scope.password = '';
		 $scope.display_name = '';
		 
		 $location.url('/');
   };
}]);


	