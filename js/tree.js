var MAX = 10000;

function Node( number ){
    this.number = 0;
    this.parent = null;
    this.degree = 0;

    if( number === undefined ){
        this.number = Math.floor((Math.random() * MAX) + 1);
    }
    else{
        this.number = number;
    }
};



function Tree(){
    this.list = [];
    this.root;
}

Tree.prototype.add = function( node ){

}