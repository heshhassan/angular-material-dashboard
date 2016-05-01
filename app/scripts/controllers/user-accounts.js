angular.module('frontEndApp')
.controller('userAccountsCtrl', ['$scope','$mdDialog', function($scope, $mdDialog){
  $scope.toggleSearch = false;
  $scope.headers = [
    {
      name:'',
      field:'thumb'
    },{
      name: 'Name',
      field: 'name'
    },{
      name:'Role',
      field: 'role'
    },{
      name: 'Last Modified',
      field: 'last_modified'
    }
  ];

  $scope.content = [
    {
      thumb:'https://lh3.googleusercontent.com/-5NfcdlvGQhs/AAAAAAAAAAI/AAAAAAAAABY/ibGrApGYTuQ/photo.jpg',
      name: 'Bruno Mars',
      role: 'User',
      last_modified: 'Jun 5, 2014'
    },{
      thumb:'http://www.otakia.com/wp-content/uploads/V_1/article_3573/7405.jpg',
      name: 'AT-AT',
      role: 'Admin',
      last_modified: 'Jun 5, 2014'
    },{
      thumb:'https://speakerdata.s3.amazonaws.com/photo/image/774492/Mark-Ronson-r24.jpg',
      name: 'Mark Ronson',
      role: 'Sponsor',
      last_modified: 'Jun 5, 2014'
    },{
      thumb:'http://thatgrapejuice.net/wp-content/uploads/2014/03/lady-gaga-that-grape-juice-televisionjpg.jpg',
      name: 'Lady Gaga',
      role: 'User',
      last_modified: 'Jun 5, 2014'
    }
  ];

  $scope.custom = {name: 'bold', description:'grey',last_modified: 'grey'};
  $scope.sortable = ['name', 'description', 'last_modified'];
  $scope.thumbs = 'thumb';
  $scope.count ;

    $scope.showNewUserModal = function(ev) {
      $mdDialog.show({
        controller: newUserController,
        templateUrl: 'views/modals/addUser-modal.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      })
        .then(function(user) {
          $scope.content.push({
            thumb:'https://speakerdata.s3.amazonaws.com/photo/image/774492/Mark-Ronson-r24.jpg',
            name: user.name,
            role: user.role,
            last_modified: 'Jun 5, 2014'
          });
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
    };

    $scope.deleteUser = function(item){
      var index = $scope.content.indexOf(item);
      $scope.content.splice(index, 1);
    }
}]);


function newUserController($scope, $mdDialog) {
  $scope.user = {};
  $scope.form = {};
  $scope.roles = ['User', 'Sponsor','Admin'];
  $scope.setFormScope = function(from){
    $scope.userForm = from;
  };
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    angular.forEach($scope.form.userForm.$error.required, function(field) {
      field.$setDirty();
    });
    if($scope.form.userForm.$valid) {
      $mdDialog.hide($scope.user);
    }
  };
}

angular.module('frontEndApp').directive('mdTable', function () {
  return {
    restrict: 'E',
    scope: {
      headers: '=',
      content: '=',
      sortable: '=',
      filters: '=',
      customClass: '=customClass',
      thumbs:'=',
      count: '='
    },
    controller: function ($scope,$filter,$window) {
      var orderBy = $filter('orderBy');
      $scope.tablePage = 0;
      $scope.nbOfPages = function () {
        return Math.ceil($scope.content.length / $scope.count);
      },
      	$scope.handleSort = function (field) {
          if ($scope.sortable.indexOf(field) > -1) { return true; } else { return false; }
      };
      $scope.order = function(predicate, reverse) {
          $scope.content = orderBy($scope.content, predicate, reverse);
          $scope.predicate = predicate;
      };
      $scope.order($scope.sortable[0],false);
      $scope.getNumber = function (num) {
      			    return new Array(num);
      };
      $scope.goToPage = function (page) {
        $scope.tablePage = page;
      };
      $scope.deleteUser = function(item){
        var index = $scope.content.indexOf(item);
        $scope.content.splice(index, 1);
      }
    },
    template: angular.element(document.querySelector('#md-table-template')).html()
  }
});



angular.module('frontEndApp').filter('startFrom',function (){
  return function (input,start) {
    start = +start;
    return input.slice(start);
  }
});
