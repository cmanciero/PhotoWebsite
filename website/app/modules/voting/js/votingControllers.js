(function() {
	'use strict';

	angular.module('jobPhotoApp.voting.controllers', [])
		.controller('VotingController', ['$scope',
			function($scope) {
				var people = [{
					person: {
						photo: 'http://sapapphaus-ux.com/images/logo.png',
						jobs: [{
							title: 'Software Developer',
							id: 1
						}, {
							title: 'Doctor',
							id: 2
						}, {
							title: 'Construction Worker',
							id: 3
						}, {
							title: 'Architect',
							id: 4
						}]
					}
				}, {
					person: {
						photo: 'images/superman.jpg',
						jobs: [{
							title: 'Software',
							id: 1
						}, {
							title: 'Doctor',
							id: 2
						}, {
							title: 'Construction Worker',
							id: 3
						}, {
							title: 'Architect',
							id: 4
						}]
					}
				}];

				var iPeopleIndex = 0,
					iPeopleCount = people.length;

				$scope.person = people[iPeopleIndex].person;

				$scope.submitVote = function(votedJob) {
					console.log(votedJob);

					// move to next person
					if (iPeopleIndex < iPeopleCount - 1) {
						$scope.person = people[++iPeopleIndex].person;
					}

					// clear selections
					// $scope.voteForm.job = {};
				};
			}
		]);
})();