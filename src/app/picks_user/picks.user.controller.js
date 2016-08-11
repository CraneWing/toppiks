angular.module('toppiksApp')
	.controller('PicksUserCtrl', [
	  '$scope',
	  'pickFactory',
	  '$http',
	  '$stateParams',
	  '$rootScope',
		function($scope, pickFactory, $http, $stateParams, $rootScope) {
		  var userId = $stateParams.user_id;
		  console.log(userId);

		  $scope.showMessage = false;
		  
		  $http.get('/api/picks/user/' + userId)
		    .success(function(results) {
		      console.log(results);
		      
		      if (results.picks.length > 0) {
		        $scope.picks = results.picks;
		        $scope.displayName = results.display_name;
		      }
		      else {
		        $scope.showMessage = true;
		      }
		    })
		    .error(function(err) {
		      console.log(err);
		    });
}]);