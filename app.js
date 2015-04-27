var portfolio = angular.module('portfolio', ['ui.router']);

portfolio.directive('enter', function() {
    return function(scope, element) {
        element.bind('mouseenter', function() {
            console.log(scope.apple);
        });
    };
});

  portfolio.config(function($stateProvider) {

    $stateProvider.state('home', {
      url: "",
      templateUrl: "partials/home.html",
      controller: "ProjectCtrl",
    });


});
