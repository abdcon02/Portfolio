var portfolio = angular.module('portfolio', ['ui.router']);

portfolio.directive('enter', function() {
    return function(scope, element) {
            element.bind('mouseenter', function() {
                scope.result = element.text();
            });
    };
});

portfolio.directive('update', function() {
    return {
        scope:{
            fruit: "="
        },
        template: "<h3>This is your choice: {{fruit}} </h3>"
    }
})


  portfolio.config(function($stateProvider) {

    $stateProvider.state('home', {
      url: "",
      templateUrl: "partials/home.html",
      controller: "ProjectCtrl",
    });


});
