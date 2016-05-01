angular.module('frontEndApp').controller('SideNav', function($scope, $mdSidenav, $mdToast) {
  $scope.toggleSidenav = function(menu) {
    $mdSidenav(menu).toggle();
  };
  $scope.toggleLeft = buildDelayedToggler('left');
  function debounce(func, wait, context) {
    var timer;
    return function debounced() {
      var context = $scope,
          args = Array.prototype.slice.call(arguments);
      $timeout.cancel(timer);
      timer = $timeout(function() {
        timer = undefined;
        func.apply(context, args);
      }, wait || 10);
    };
  };
  function buildDelayedToggler(navID) {
      return debounce(function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }
    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }
    }
  $scope.selected = [];
  $scope.toggle = function(item, list) {
    var idx = list.indexOf(item);
    if (idx > -1) list.splice(idx, 1);
    else list.push(item);
  };
  $scope.data = {
    toolbar: {
      buttons: [{
        name: 'Button 1',
        icon: 'add',
        link: 'Button 1'
      }],
      menus: [{
        name: 'Menu 1',
        icon: 'message',
        width: '4',
        actions: [{
          name: 'Action 1',
          completed: true,
          error: true
        }, {
          name: 'Action 2',
          completed: false,
          error: false
        }, {
          name: 'Action 3',
          completed: true,
          error: true
        }]
      }]
    },
    sidenav: {
      sections: [{
        name: 'Awards',
        icon: 'awards',
        expand: false,
        parent: false,
        url:'/#/awards'
      },{
        name: 'Approval requests',
        icon: 'approval',
        expand: false,
        parent: false,
        url:'/#/approval'
      },{
        name: 'Accounts',
        expand: false,
        url:'javascript:void(0)',
        icon: 'accounts',
        parent: true,
        actions: [{
          name: 'User',
          icon: 'users',
          link: 'User',
          url:'/#/user-accounts'
        }]
      },{
          name: 'Submit Logos',
          icon: 'submit-logos',
          link: 'User',
          url:'/#/submit-logos'
          }
      ]
    }
  }
})
  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };
  })