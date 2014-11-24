(function() {
	'use strict';

	angular.module('jobPhotoApp.utils.directives', [])
		.directive('cgmPhotoUpload', ['localStorageService',
			function(localStorageService) {
				return {
					restrict: 'E',
					templateUrl: '/modules/utils/views/photoUpload.html',
					scope: {
						account: '=accountAttr'
					},
					replace: true,
					link: function(scope, elem) {
						scope.progress = 0;

						scope.fileChanged = function(event) {
							var fileName = elem.find('input[type="file"]').val();
							console.log('value changed ' + fileName);

							scope.$apply(function() {
								scope.avatar = fileName;
							});

							if (localStorageService.isSupported) {
								localStorageService.set('profilePhoto', fileName);
							}

							var files = event.files;

							// Loop through the FileList and render image files as thumbnails.
							for (var i = 0, f; f = files[i]; i++) {

								// Only process image files.
								if (!f.type.match('image.*')) {
									continue;
								}

								var reader = new FileReader();

								// Closure to capture the file information.
								reader.onload = (function(theFile) {
									return function(e) {
										// Render thumbnail.
										var span = document.createElement('span');
										span.innerHTML = ['<img class="thumb" src="', e.target.result,
											'" title="', escape(theFile.name), '" style="max-width:200px;"/>'
										].join('');
										document.getElementById('thumbnail').insertBefore(span, null);
									};
								})(f);

								// Read in the image file as a data URL.
								reader.readAsDataURL(f);
							}
						};
					}
				};
			}
		]);
})();