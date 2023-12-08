function insertionSortReverse(array) {
    // Start from the second-to-last element and move backwards
for (var i = array.length - 2; i >= 0; i--) {
  var val = array[i];
  var j;

  // Move through the array to the right of the current position
  for (j = i; j < array.length - 1 && array[j + 1] < val; j++) {
    array[j] = arr[j + 1];
  }

  array[j] = val;
}

return array;
}