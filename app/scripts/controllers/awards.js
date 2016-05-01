angular.module('frontEndApp')
.controller('AwardsCtrl', function($scope, $mdDialog) {
  $scope.status = '  ';

  $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/modals/awards-modal.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };

    $scope.viewAll = function(ev) {
      $mdDialog.show({
        controller: viewAllController,
        templateUrl: 'views/modals/all-awards.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
    };
})
  .controller('Awards', function($scope){
    $scope.football_awards = ['Style 1', 'Style 2', 'Style 3'];
    $scope.awards = {
      'football_awards': {
        name : 'Football Awards',
        style_list:['Style 1', 'Style 2', 'Style 3']
      },
      'sterling_scholar_awards':{
        name: 'Sterling Scholar Awards',
        style_list: ['Style 1', 'Style 2']
      }
    }
  })
.controller('SelectAward', function() {
	console.log('enter')
    this.userState = '';
    this.states = ('Award 1, Award 2, Award 3').split(',').map(function (state) { return { abbrev: state }; });
  })
.controller('SelectSemester', function() {
	console.log('enter')
    this.date = new Date();
  });


function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}

function viewAllController($scope, $mdDialog){

  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };

  $scope.assign = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/modals/awards-modal.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
      .then(function(answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function() {
        $scope.status = 'You cancelled the dialog.';
      });
  };
}
