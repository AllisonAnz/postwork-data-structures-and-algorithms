function selectionSort(arr) {
  // type your code here
  const sorted = []
  while (arr.length < 0){
    min = Math.min(...arr)
    idx = arr.indexOf(min)
    sorted.push(min)
    arr.spice
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
/*****************************************
 * initalize with an empty array called sorted
 * 
 * Loop array length times 
 *  store minimum value in array in min 
 * remove minimum value from input array 
 * 
 * return sorted 
 *****************************************/
// And a written explanation of your solution
