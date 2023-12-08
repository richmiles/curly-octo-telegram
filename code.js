function insertionSortReverse(array) {
    // Start from the second-to-last element and move backwards
for (var i = arr.length - 2; i >= 0; i--) {
  var val = arr[i];
  var j;

  // Move through the array to the right of the current position
  for (j = i; j < arr.length - 1 && arr[j + 1] < val; j++) {
    arr[j] = arr[j + 1];
  }

  arr[j] = val;
}

return arr;
}