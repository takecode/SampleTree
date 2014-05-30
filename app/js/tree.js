'use strict';

var MAX = 1000;

function Node( number ){
    this.number = 0;
    this.parent = null;
    this.left = null;
    this.right = null;
    this.depth = 0;
    this.indent = 0; // to find position in tree view.

    if( number === undefined ){
        this.number = Math.floor((Math.random() * MAX) + 1);
    }
    else{
        this.number = number;
    }
}

function Tree(){
    this.list = [];
    this.root = null;
    this.maxDepth = 0;
}

Tree.prototype.cllear = function(){
    this.list = [];
    this.root = null;
}

Tree.prototype.insert = function( number ){
    var node = new Node( number );
    if( this.root === null || this.root === undefined ){
        this.root = node;
    }
    else{
        var parentNode = this.root;
        while( true ){
            if( parentNode.number > node.number ){
                if( parentNode.left === null ){
                    parentNode.left = node;
                    node.parent = parentNode;
                    node.depth = parentNode.depth + 1;
                    node.indent = parentNode.indent * 2;
                    break;
                }
                else{
                    parentNode = parentNode.left;
                }
            }
            else{
                if( parentNode.right === null ){
                    parentNode.right = node;
                    node.parent = parentNode;
                    node.depth = parentNode.depth + 1;
                    node.indent = parentNode.indent * 2 + 1;
                    break;
                }
                else{
                    parentNode = parentNode.right;
                }
            }
        }

        if( this.maxDepth < node.depth ) this.maxDepth = node.depth; 
    }
    this.list.push( node );
};

/*
// TODO
Tree.prototype.delete = function( node ) {

};
*/
