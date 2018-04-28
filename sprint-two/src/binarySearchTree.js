var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.left = undefined;
  tree.right = undefined;
  return tree;
};

BinarySearchTree.prototype.insert = function(value, current = this) {
  if (value < current.value && current.left === undefined) {
    current.left = BinarySearchTree(value);
  } else if (value < current.value && current.left !== undefined) {
    current.left.insert(value);
  } else if (value > current.value && current.right === undefined) {
    current.right = BinarySearchTree(value);
  } else if (value > current.value && current.right !== undefined) {
    current.right.insert(value);
  }
}

BinarySearchTree.prototype.contains = function(value, current = this) {
  if (current.value === value) {
    return true;
  }
  if (value < current.value && current.left !== undefined) {
    return current.left.contains(value);
  }
  if (value > current.value && current.right !== undefined) {
    return current.right.contains(value);
  }
  return false;
}

BinarySearchTree.prototype.depthFirstLog = function(func, current = this) {
  func(current.value);
  if (current.left !== undefined) {
    current.left.depthFirstLog(func);
  }
  if (current.right !== undefined) {
    current.right.depthFirstLog(func);
  }
}
