var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var found = false;

  if (!Array.isArray(this._storage.get(index))) {
    this._storage.set(index, []);
  }

  if (bucket !== undefined) {
    for (let i = 0; i < bucket.length; i ++) {
      if (bucket[i][0] === k) {
        bucket[i] = [k, v]
        found = true; 
      }
    }
  }
  
  if (!found) {
    this._storage.get(index).push([k, v]);
  }

  
  console.log(this._storage.get(index));
  console.log(this._storage.get(index));
  //this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (let i = 0; i < bucket.length; i ++) {
    if (bucket[i][0] === k) {
      return bucket[i][1]; 
    }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);  
  var bucket = this._storage.get(index);

  for (let i = 0; i < bucket.length; i ++) {
    if (bucket[i][0] === k) {
       bucket.splice(i, 1);
    }
  }
  
};


