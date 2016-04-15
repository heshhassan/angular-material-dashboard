angular.module('frontEndApp')
  .controller('ApprovalCtrl', function ($scope, $mdDialog) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     $scope.approvals=[
     	{name:'Donor walls',number:'34', photo:'images/icons/donor.png', modal:'views/modals/donor-modal.html'},
  		{name:'Postcards',number:'62', photo:'images/icons/postcards.png', modal:'views/modals/postcards-modal.html'},
  		{name:'Programs',number:'12', photo:'images/icons/program.png',  modal:'views/modals/programs-modal.html'},
  		{name:'Plaques',number:'1', photo:'images/icons/plaques.png',  modal:'views/modals/plaques-modal.html'},
      {name:'Sales contracts',number:'12', photo:'images/icons/sales.png',  modal:'views/modals/sales-modal.html'},
  		{name:'Comments',number:'12', photo:'images/icons/sales.png',  modal:'views/modals/comments-modal.html'}
    ]


    $scope.modalApproval= function($index){
        $mdDialog.show({
          controller: DialogController,
          templateUrl: $scope.approvals[$index].modal,
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
    $scope.commentsApproval= function(index, donor){
        $mdDialog.show({
          controller:  function($mdDialog,donor) {
           var vm = this;
           vm.donor = donor;
           },
          controllerAs: 'modal',
          parent: angular.element(document.body),
          targetEvent: index,
          locals:{donor: donor},
          templateUrl: 'views/modals/comments-modal.html',
          clickOutsideToClose:true,
        }).then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
    }

    $scope.donors=[
      {name:'pic 1', url:'images/donor.jpg'},
      {name:'pic 2', url:'images/donor.jpg'},
      {name:'pic 3', url:'images/donor.jpg'}
    ];

    $scope.postcards=[
      {name:'pic 1', url:'images/donor.jpg'}
    ]
    $scope.programs=[
      {name:'pic 1', url:'images/program.png'}
    ]

  });
