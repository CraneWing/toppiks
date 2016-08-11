angular.module('toppiksApp')
	.controller('PicksUserCtrl', [
	  '$scope',
	  'pickFactory',
	  '$http',
	  '$location',
	  '$stateParams',
	  '$rootScope',
	  '$auth',
		function($scope, pickFactory, $http, 
		$location, $stateParams, $rootScope, $auth) {
		  
		  var userId = $stateParams.user_id;
		  var currentUser = $rootScope.currentUser;
		  
		  $scope.isAuthenticated = function() {
				return $auth.isAuthenticated();
			};

		  $scope.showMessage = false;
		  
		  $http.get('/api/picks/user/' + userId)
		    .success(function(results) {
		      //console.log(results);
		      
		      if (results.picks.length > 0) {
		        $scope.picks = results.picks;
		        $scope.displayName = results.display_name;
		      }
		      else {
		        $scope.displayName = results.display_name;
		        $scope.showMessage = true;
		      }
		    })
		    .error(function(err) {
		      console.log(err);
		    });
		    
		$scope.deletePick = function(pickId) {
		  console.log(pickId);
		  console.log(typeof(pickId));
	  	
	  	pickFactory.deletePick(pickId)
  			.success(function(result) {
  			  console.log('Pick deleted!');
  				$location.url('/picks/user/' + currentUser.id);
  			});
		};
}]);