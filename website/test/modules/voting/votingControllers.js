(function() {
	'use strict';

	describe('Controller: VotingController', function() {

		// load the controller's module
		beforeEach(module('jobPhotoApp'));

		var VotingController,
			scope;
		// people = [{
		// 	person: {
		// 		photo: 'http://sapapphaus-ux.com/images/logo.png',
		// 		jobs: [{
		// 			title: 'Software Developer',
		// 			id: 1
		// 		}, {
		// 			title: 'Doctor',
		// 			id: 2
		// 		}, {
		// 			title: 'Construction Worker',
		// 			id: 3
		// 		}, {
		// 			title: 'Architect',
		// 			id: 4
		// 		}]
		// 	}
		// }, {
		// 	person: {
		// 		photo: 'http://sapapphaus-ux.com/images/logo.png',
		// 		jobs: [{
		// 			title: 'Software',
		// 			id: 1
		// 		}, {
		// 			title: 'Doctor',
		// 			id: 2
		// 		}, {
		// 			title: 'Construction Worker',
		// 			id: 3
		// 		}, {
		// 			title: 'Architect',
		// 			id: 4
		// 		}]
		// 	}
		// }];

		// Initialize the controller and a mock scope
		beforeEach(inject(function($controller, $rootScope) {
			scope = $rootScope.$new();
			VotingController = $controller('VotingController', {
				$scope: scope
			});
		}));

		// it('should have no jobs selected', function() {
		// 	expect(scope.voteForm.job).toBe({});
		// });

		it('should have a job selected', function() {
			// submit vote
			// scope.submitVote(people[0].person);

			// move to next person
			// expect(scope.person).toBe(people[1].person);
		});
	});
})();