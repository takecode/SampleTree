var MAX = 10000;

function Node( number ){
    this.number = 0;
    this.parent = null;
    this.left = null;
    this.right = null;
    this.depth = 0;

    if( number === undefined ){
        this.number = Math.floor((Math.random() * MAX) + 1);
    }
    else{
        this.number = number;
    }
};

function Tree(){
    //this.list = new Array();
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
    }
    //this.list.push( node );
}

// TODO
Tree.prototype.delete = function( node ){

}
