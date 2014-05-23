/**
 * Created by YeongminCha on 2014. 5. 23..
 */
var treeAppControllers = angular.module('treeApp.Controller', []);

// Index Controller
treeAppControllers.controller('IndexController', ['$scope', function ( $scope ) {
    $scope.initializeIndex = function () {
        $scope.tree = new Tree();
        var length = 9;
        for( var i = 0; i < length; i++ ){
            $scope.tree.add();
        }
        $scope.root = $scope.tree.root;
    };

    $scope.initializeIndex();
}]);

