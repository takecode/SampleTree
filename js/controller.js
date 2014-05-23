/**
 * Created by YeongminCha on 2014. 5. 23..
 */
var treeAppControllers = angular.module('treeApp.Controller', []);

// Index Controller
treeAppControllers.controller('IndexController', ['$scope', function ( $scope ) {
    $scope.initializeIndex = function () {
        $scope.tree = new Tree();
        $scope.tree.add();
        $scope.tree.add();
        $scope.tree.add();
        $scope.tree.add();
        $scope.tree.add();
        $scope.tree.add();
    };

    $scope.initializeIndex();
}]);

