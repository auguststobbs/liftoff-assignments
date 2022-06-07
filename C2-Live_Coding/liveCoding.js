// Given an array (or list) of integers, you need to find and return the index of the highest value in the array.

// passed array
// create a storage variable for index of current highest value
// compare i to i+1 for length of array
// update current highest value
// return the storage var

function getHighestValueIndex (array) {
    let highestValueIndex = 0;
    let currentHighestValue = array[0];
    
    if (array.length = 1) {
      
          return highestValueIndex;
    }
   
    for (i = 0; i < array.length; i++) {
      if (array[i] > currentHighestValue) {
        highestValueIndex = i;
        currentHighestValue = array[i];
      } 
    }
    
    return highestValueIndex;
  }
    
    
  
  // You've got about 15 minutes