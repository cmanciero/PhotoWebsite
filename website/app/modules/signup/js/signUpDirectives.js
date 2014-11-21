(function() {
	'use strict';

	angular.module('jobPhotoApp.signup.directives', [])
		.directive('cgmSignUp', ['linkedInService', 'jobsService',
			function(linkedInService, jobsService) {
				return {
					restrict: 'E',
					scope: {},
					templateUrl: '/modules/signup/views/signUp.html',
					link: function(scope) {
						scope.onLinkedInLoad = function() {
							IN.Event.on(IN, 'auth', scope.onLinkedInAuth);
							IN.Event.on(IN, 'logout', scope.onLogout);
						};

						// check authorization
						scope.onLinkedInAuth = function() {
							IN.API.Profile('me').result(linkedInService.setLinkedInProfile).error(scope.onError);
							IN.API.Connections('me').params({
								'start': 0,
								'count': 5
							}).result(linkedInService.setLinkedInConnections).error(scope.onError);
						};

						scope.onError = function(error) {
							console.log(error);
						};

						scope.onLogout = function() {
							console.log('You are logged out');
						};

						// load linkedIn information
						scope.onLinkedInLoad();

						// get list of jobs
						jobsService.setJobsList();
					}
				};
			}
		]);
})();