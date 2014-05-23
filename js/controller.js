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
    $scope.tree = new Node(  );
    $scope.tree2 = new Node( 3 );
    $scope.tree3 = new Node(  );
}]);

