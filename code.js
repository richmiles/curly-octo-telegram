// Function to perform insertion sort in reverse order.
function insertionSortReverse(array) {

  // Start from the second-to-last element and move backwards
  for (let currentIndex = array.length - 2; currentIndex >= 0; currentIndex--) {
    // Store the value of the current element to be inserted in its correct position
    const val = array[currentIndex];

    // Initialize j to the current index i
    let shiftIndex = currentIndex;
    // Move through the array to the right of the current position
    // This loop shifts elements to the left until the correct position for val is found
    for (; shiftIndex < array.length - 1 && array[shiftIndex + 1] < val; shiftIndex++) {
      // Shift the element to the left
      array[shiftIndex] = array[shiftIndex + 1];
    }

    // Insert the value in its correct position
    array[shiftIndex] = val;
  }

  // Return the sorted array
  return array;
}
