(function() {
	'use strict';

	angular.module('jobPhotoApp.voting.directives', [])
		.directive('cgmVotingSection', function() {
			return {
				restrict: 'E',
				scope: {
					person: '=personAttr',
					submitVote: '&submitVoteAttr'
				},
				replace: true,
				templateUrl: '/modules/voting/views/votingSection.html',
				link: function(scope) {
					scope.vote = function(jobVoted) {
						scope.submitVote({
							votedJob: jobVoted
						});
						scope.voteForm.job = {};
					};
				}
			};
		})
		.directive('cgmVotingResults', ['jobService',
			function(jobService) {
				return {
					restrict: 'E',
					scope: {
						info: '=accountAttr'
					},
					replace: true,
					templateUrl: '/modules/voting/views/votingResults.html',
					link: function(scope) {
						scope.topJob = jobService.findTopJob(scope.info.jobs);
					}
				};
			}
		]);
})();