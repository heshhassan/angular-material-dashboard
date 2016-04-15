angular.module('frontEndApp').controller('SideNav', function($scope, $mdSidenav, $mdToast) {
  $scope.toggleSidenav = function(menu) {
    $mdSidenav(menu).toggle();
  };
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
        name: 'Sponsors',
        icon: 'sponsors',
        expand: false,
        url:'/#/'
      }, {
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
          },{
          name: 'Submit Logos',
          icon: 'submit-logos',
          link: 'User',
          url:'/#/submit-logos'
          },{
          name: 'Social portals',
          icon: 'social',
          link: 'User',
          url:'/#/user-accounts'
        }]
      },{
          name: 'Extras',
          icon: 'extras',
          parent: false,
          url:'/#/extras'
        }]
    }
  }
});