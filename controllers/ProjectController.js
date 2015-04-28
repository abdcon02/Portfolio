portfolio.controller('ProjectCtrl', function($scope, ProjectsFactory, $stateParams) {

    $scope.apple = ProjectsFactory.apple;
    $scope.grape = ProjectsFactory.grape;
    $scope.melon = ProjectsFactory.melon;
    $scope.banana = ProjectsFactory.banana;

    $scope.result = "";
});
