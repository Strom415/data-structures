var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  var hasTarget = false;

  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if ( this.children[i].contains(target) === true ) {
        hasTarget = true;
      }
    }
  }
  return hasTarget;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
