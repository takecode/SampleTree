'use strict';

var MAX = 1000;

function Node( number ){
    this.number = 0;
    this.parent = null;
    this.right = null; // right child
    this.left = null; // left child
    this.rightFriend = null;
    this.depth = 0;

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
    this.leftstNode = [];
}

Tree.prototype.clear = function(){
    this.list = [];
    this.root = null;
    this.maxDepth = 0;
    this.leftstNode = [];
};

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
                    break;
                }
                else{
                    parentNode = parentNode.right;
                }
            }
        }

        if( this.maxDepth < node.depth ){
            this.maxDepth = node.depth; 
        }
    }

    //this.findPosition( node );
    this.list.push( node );
};

Tree.prototype.findPosition = function( node ){
    var depth = node.depth;
    if( this.leftstNode[depth] === undefined ){
        this.leftstNode[depth] = node;
    }
    else{
        var thatNode = this.leftstNode[depth];    
        var leftNode = null;

        while( true ){
            if( thatNode.right === null ){
                thatNode.right = node;
                break;
            }
            else if( thatNode.number > node.number ){
                if( leftNode === null ){
                    this.leftstNode[depth] = node;
                    node.right = thatNode;
                } 
                else{
                    leftNode.right = node;
                    node.right = thatNode;
                }
            }
            else{
                leftNode = thatNode;
                thatNode = thatNode.right;
            }
        }
    }
};

/*
// TODO
Tree.prototype.delete = function( node ) {

};
*/
