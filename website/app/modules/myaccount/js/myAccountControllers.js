(function() {
	'use strict';

	angular.module('jobPhotoApp.myaccount.controllers', [])
		.controller('MyAccountController', ['$scope', 'jobService',
			function($scope, jobService) {
				$scope.myInfo = {
					photo: 'images/superman.jpg',
					numberOfVotes: 30456,
					jobs: [{
						id: 1,
						title: 'Software Developer',
						votes: 4567
					}, {
						id: 2,
						title: 'Doctor',
						votes: 1234
					}, {
						id: 3,
						title: 'Architect',
						votes: 2345
					}, {
						id: 4,
						title: 'Construction Worker',
						votes: 3456
					}]
				};

				$scope.topJob = jobService.findTopJob($scope.myInfo.jobs);
			}
		]);
})();