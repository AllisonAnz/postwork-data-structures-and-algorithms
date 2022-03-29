function findFirstDuplicate(arr) {
  // type your code here
  const unq = new Set()

  for (const value of arr){
    if (unq.has(value)){
      return value
    }
      unq.add(value)
  }
    return -1
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// initalize an empty set called unq 

// iterate thru the input array 
//    if value is in unq, return value
//    else add value to the set
// return -1 if no duplicate found during iteration 

// And a written explanation of your solution
