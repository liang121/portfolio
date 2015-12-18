App.controller('rootPage', function ($scope, $window,$http,$timeout) {
	var email = $scope.emailAddress;
	var name = $scope.name;
	$scope.email=function() {
		console.log(email+" "+name);
		var body_message = $scope.content;
	    var mailto_link = 'mailto:' + email + '?subject=' + name + '&body=' +body_message;
	    window.open(mailto_link);
	};
});

App.directive("scroll",function($window){
	return function(scope,element,attrs){
		var e = angular.element(element.children()[0]).children();
		console.log(e);
		angular.element($window).bind("scroll",function(){
			if (this.pageYOffset >= 550) {
                scope.myStyle = {'position':'fixed'};

             } else {
                scope.myStyle = {'position':'static'};
             }
             scope.$apply();
		})
	}
})