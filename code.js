// Function to perform insertion sort in reverse order.
function insertionSortReverse(array) {
  // Start from the second-to-last element and move backwards
  for (let i = array.length - 2; i >= 0; i--) {
    // Store the value of the current element to be inserted in its correct position
    const val = array[i];

    // Initialize j to the current index i
    let j = i;
    // Move through the array to the right of the current position
    // This loop shifts elements to the left until the correct position for val is found
    for (j = i; j < array.length - 1 && array[j + 1] < val; j++) {
      // Shift the element to the left
      array[j] = array[j + 1];
    }

    // Insert the value in its correct position
    array[j] = val;
  }

  // Return the sorted array
  return array;
}
