angular.module('frontEndApp')
  .controller('LoginCtrl', function ($scope, $mdDialog, $location, $rootScope) {
  	  
  	  $scope.logged = false;
  	  $scope.register = false;

  	  $scope.loginState = function(){
	    $location.path("/awards");
  	  	$scope.logged = true;
  	  	// $scope.register = true;
	    console.log($scope.logged);
  	  }

  	  $scope.registerState = function(){
	    $location.path("/awards");
  	  	$scope.registered = true;
  	  	$scope.logged = false;

  	  }

	  $scope.photoName= "Upload your photo";
	  $scope.displayPhotoName= function(files){
	  	// alert();
	  	$scope.photoName= files[0].name.toString();
	  	console.log($scope.photoName);
	  	$scope.$apply();
	  }

    this.userState = '';
      this.states = ('Principal'+
			'Principal Secretary'+
			'Vice Principal'+
			'Tennis Coach'+
			'Cross Country Coach'+
			'Soccer Coach'+
			'Volleyball Coach'+
			'Golf Coach'+
			'Football Coach'+
			'Basketball Coach'+
			'Wrestling Coach'+
			'Swim Coach'+
			'Baseball Coach'+
			'Softball Coach'+
			'Drill Coach'+
			'Choir Teacher'+
			'Athletic Director'+
			'boy/girl tennis'+
			'boy/girl soccer'+
			'boy/girl basketball'+
			'Also for School Awards we need logins for'+
			'Program Director'+
			'School Coordinator').split(' ').map(function (state) { return { abbrev: state }; });


})
