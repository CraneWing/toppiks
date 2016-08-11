angular.module('toppiksApp')
 .config([
 	'$stateProvider',
	'$urlRouterProvider',
	'$authProvider',
	function($stateProvider, $urlRouterProvider, $authProvider) {
		
			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'app/home/home.html',
					controller: 'HomeCtrl',
					resolve: {
						$title: function() {
							return 'Welcome';
						}
					}
				 })
				 	.state('picks/add', {
					url: '/picks/add',
					templateUrl: 'app/pick_add/pick_add.html',
					controller: 'AddPickCtrl',
					resolve: {
						$title: function() {
							return 'Add Pick';
						}
					}
				})
				.state('signup', {
					url: '/signup',
					templateUrl: 'app/auth/signup/signup.html',
					controller: 'SignupCtrl',
					resolve: {
						$title: function() {
							return 'Sign Up';
						}
					}
				})
				.state('login', {
					url: '/login',
					templateUrl: 'app/auth/login/login.html',
					controller: 'LoginCtrl',
					resolve: {
						$title: function() {
							return 'Login';
						}
					}
				 })
				 .state('user/:user_id', {
					url: '/picks/user/:user_id',
					templateUrl: 'app/picks_user/picks_user.html',
					controller: 'PicksUserCtrl',
					resolve: {
						$title: function() {
							return 'User Piks';
						}
					}
				 });
				
				$urlRouterProvider.otherwise('/');

				$authProvider.loginUrl = 'https://toppiks-cranewing.c9users.io/api/users/login';
				$authProvider.signupUrl = 'https://toppiks-cranewing.c9users.io/api/users/signup';

				$authProvider.twitter({
				  url: '/api/users/twitter',
				  responseType: 'token',
				  popupOptions: {
				  	width: 495, height: 600
				  }
				});
				
}])
.run(['$rootScope', '$window', '$auth', function($rootScope, $window, $auth) {
	if ($auth.isAuthenticated()) {
		$rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
	}
}]);
// .run('$rootScope', '$auth', '$state', 
// 	function ($rootScope, $auth, $state) {
// 		$rootScope.$on('$stateChangeStart', function (event, to) {
// 			if (to.data && to.data.requiresLogin) {
// 				if (!$auth.isAuthenticated()) {
// 					event.preventDefault();
// 					$state.go('login');
// 				}
// 			}
// 		});
// });