'use strict';

/**
 * Created by YeongminCha on 2014. 5. 23..
 */
var treeAppControllers = angular.module('treeApp.Controller', []);

// Index Controller
treeAppControllers.controller('IndexController', ['$scope', function ( $scope ) {
    $scope.initialize= function () {
        $scope.tree = new Tree();
        $scope.treeWidth = [];
        $scope.testSample();
    };

    $scope.addRandomNode = function(){
        $scope.tree.insert();
    };

    $scope.addNode = function(){
        $scope.tree.insert( $scope.number );
    };

    $scope.clear = function(){
        $scope.tree.clear();
    };

    $scope.testSample = function(){
        var length = 9;
        for( var i = 0; i < length; i++ ){
            $scope.addRandomNode();
        }
    }

    $scope.getCx = function( x, depth ){
        var width = 30;
        return ( $scope.tree.maxDepth - depth ) * width * 2 + x * width + width;
    }

    $scope.getCy = function( depth ){
        var height = 40;
        return height + depth * height;
    }

    $scope.initialize();
}]);

// Node Controller
treeAppControllers.controller('NodeController', ['$scope', function ( $scope ) {
    $scope.initialize= function () {
        $scope.calculateImagePosition();
    };

    $scope.calculateImagePosition = function(){
        var depth = $scope.node.depth;
        var width = $scope.treeWidth[depth];

        if( width === undefined ) width = 1;
        else width++;
        console.log( "depth:" + depth + " width:" + width );

        $scope.cx = width * 40;
        $scope.cy = 30 + depth * 40;
        $scope.r = 14;
        $scope.x = $scope.cx - 15;
        $scope.y = $scope.cy + 2;

        console.log( $scope.cx );

        $scope.treeWidth[depth] = width;
    }

    $scope.initialize();
}]);

