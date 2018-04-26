var LinkedList = function() {
  var list = {};
  list.head = null; //always first item in list
  list.tail = null; //always the last item in list
  
  list.addToTail = function(value) {  
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      //check on how to set next value/make sure we aren't overwriting first next
      list.tail.next = newNode;
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    var returnVal = list.head.value;
    list.head = list.head.next;
    return returnVal;
  };

  list.contains = function(target) {
    //check list for target input
    var current = list.head;
    // if (current.value === target) {
    //   return true;
    // }
    while (current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
