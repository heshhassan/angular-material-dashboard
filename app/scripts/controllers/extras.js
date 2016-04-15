'use strict';

/**
 * @ngdoc function
 * @name frontEndApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontEndApp
 */
angular.module('frontEndApp')
  .controller('ExtrasCtrl', function ($scope, $mdDialog) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     $scope.extras=[
     	{name:' Activity Passes',number:'14', photo:'images/icons/passes.png', modal: 'views/modals/activity-modal.html'},
  		{name:'Swags',number:'22', photo:'images/icons/swags.png', modal: 'views/modals/swags-modal.html'},
  		{name:'Stickers',number:'12', photo:'images/icons/stickers.png', modal: 'views/modals/stickers-modal.html'}
    ]

    $scope.swags=[
      {name:'pic 1', url:'images/swag.jpg'}
    ]

    $scope.modalExtra= function($index){
        $mdDialog.show({
          controller: DialogController,
          templateUrl: $scope.extras[$index].modal,
          parent: angular.element(document.body),
          targetEvent: $index,
          clickOutsideToClose:true
        })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
    }

  });
