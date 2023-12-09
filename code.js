// Code for the insertion sort algorithm,
// but starting from the end of the array.
function insertionSortReverse(array) {

  // Start from the second-to-last element and move backwards
  for (let i = array.length - 2; i >= 0; i--) {
    const val = array[i];

    let j = i;
    // Move through the array to the right of the current position
    for (j = i; j < array.length - 1 && array[j + 1] < val; j++) {
      array[j] = array[j + 1];      
    }

    array[j] = val;
  }

  return array;
}