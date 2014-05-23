/**
 * Created by YeongminCha on 2014. 5. 23..
 */
var treeAppControllers = angular.module('treeApp.Controller', []);

// Index Controller
treeAppControllers.controller('IndexController', ['$scope', '$http', function ( $scope, $http ) {
    /*
    $http.get('Resources/Environment.json').success(function (data) {
        $scope.environment = data;

    });
    */

    $scope.initializeIndex = function () {
    };

    $scope.indexObject = {};
    $scope.initializeIndex();
    $scope.sample = "haha";
}]);

