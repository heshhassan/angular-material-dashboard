angular
  .module('frontEndApp')
  .config(function($mdIconProvider) {
    $mdIconProvider
      .iconSet("social", 'img/icons/sets/social-icons.svg', 24);
  })
  .controller('userDllCtrl', function DemoCtrl($mdDialog) {
    var originatorEv;
    this.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };
  }).controller('notificationDllCtrl', function DemoCtrl($mdDialog) {
    var originatorEv;
    this.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };
  });