angular.module('frontEndApp')
.controller('submitLogosCtrl', function($scope, Upload, $mdDialog, $rootScope) {
	$scope.logos=[
		{name:'logo 1', url:'images/logos/logo1.jpg'},
		{name:'logo 2', url:'images/logos/logo2.jpg'},
		{name:'logo 3', url:'images/logos/logo3.jpg'},
		{name:'logo 1', url:'images/logos/logo1.jpg'},
		{name:'logo 2', url:'images/logos/logo2.jpg'},
		{name:'logo 3', url:'images/logos/logo3.jpg'},
		{name:'logo 1', url:'images/logos/logo1.jpg'},
		{name:'logo 2', url:'images/logos/logo2.jpg'},
	];

	$scope.uploadLogo = function(file, photo) {
        if (file) {
            Upload.upload({
                url: '/logos/upload',
                file: file,
                progress: function (evt) {
                }
            }).then(function (resp) {;
                console.log(resp);
                $scope.logos.push({name:resp.data.originalname, url:'images/logos/'+ resp.data.filename})
            }, function (resp) {
                console.log('Error status: ' + resp.status);
            }, function (evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                file.progress = progressPercentage;
                console.log('progress: ' + progressPercentage + '% ');
            });
        }
    }

    $scope.deleteLogo = function(logo, index){
        $scope.logos.splice( index, 1 );
    }
    $scope.viewLogo = function(logo, index){
        $mdDialog.show({
          controller:  function($mdDialog,logo) {
           var vm = this;
           vm.logo = logo;
           },
          controllerAs: 'modal',
          parent: angular.element(document.body),
          targetEvent: index,
          locals:{logo: logo},
          templateUrl: 'views/modals/logos-modal.html',
          clickOutsideToClose:true,
        }).then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
    }
})
