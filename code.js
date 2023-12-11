// Function to perform insertion sort in reverse order.
function insertionSortReverse(array) {
  // Start from the second-to-last element and move backwards
  for (let currentIndex = array.length - 2; currentIndex >= 0; currentIndex--) {
    // Store the value of the current element to be inserted in its correct position
    const currentElement = array[currentIndex];

    // Initialize the insertion index to the current index
    let insertionIndex = currentIndex;
    // Move through the array to the right of the current position
    // This loop shifts elements to the left until the correct position for currentElement is found
    while (array[insertionIndex + 1] < currentElement) {
      // Shift the element to the left
      array[insertionIndex] = array[insertionIndex + 1];
      insertionIndex++;
    }

    // Insert the value in its correct position
    array[insertionIndex] = currentElement;
  }

  // Return the sorted array
  return array;
}