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
		])
		.directive('cgmVoteBar', ['voteBarFilter', '$timeout',
			function(voteBarFilter, $timeout) {
				return {
					restrict: 'E',
					scope: {
						job: '=jobAttr',
						totalVotes: '=totalVoteAttr',
						jobIndex: '=jobIndexAttr'
					},
					replace: true,
					templateUrl: '/modules/voting/views/voteBar.html',
					link: function(scope) {
						// get the vote total percent
						var voteTotal = voteBarFilter(scope.job.votes, scope.totalVotes);
						scope.votePercent = '0%';
						scope.barClass = 'redBar';

						switch (scope.jobIndex) {
							case 0:
								scope.barClass = 'redBar';
								break;
							case 1:
								scope.barClass = 'blueBar';
								break;
							case 2:
								scope.barClass = 'greenBar';
								break;
							case 3:
								scope.barClass = 'purpleBar';
								break;
							default:
								scope.barClass = 'redBar';
								break;
						}

						// draws bar width
						scope.setBarPercent = function(percent) {
							$timeout(function() {
								scope.votePercent = percent + '%';
							}, 100);
						};

						for (var i = 0, j = voteTotal; i < j; i += 1) {
							// set the bar width, will animate to bar width
							scope.setBarPercent(i);
						}

						scope.votePercent = voteTotal;
					}
				};
			}
		]);
})();