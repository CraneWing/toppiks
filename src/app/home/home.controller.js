angular.module('toppiksApp')
	.controller('HomeCtrl', ['$scope', '$http', '$auth',
		function($scope, $http, $auth) {
			$http.get('/api/picks')
				.success(function(results) {
					$scope.picks = results;
				});
			
			$scope.isAuthenticated = function() {
				return $auth.isAuthenticated();
			};
		  
		  $scope.likeThis = function(pick) {
		  	
		  	if (!pick.isLiked) {
		  		pick.isLiked = true;
		  	 	pick.likes++;
		  		updateLike(pick.likes, pick._id);
		  	  //console.log('like value is ' + like);
		  	  //console.log($scope.picks[index].likes);
					}
		  	else {
		  		pick.isLiked = false;
		  	 	$scope.toggleClass = 'typcn-heart-outline';
		  	 	
		  	 	if (pick.likes > 0) {
		  	 		pick.likes--;
		  	 	}
		  	 	else {
		  	 		pick.likes = 0;
		  	 	}
		  	
		  	 	updateLike(pick.likes, pick._id);
		  	}
		  };
		  
		  function updateLike(likeNum, pickId) {
		  	$http.post('/api/picks/' + pickId + '/update_like', {
		  		likes: likeNum
		  	})
		  	.success(function(result) {
		  		console.log('likes sent');
		  	});
		  }

}]);