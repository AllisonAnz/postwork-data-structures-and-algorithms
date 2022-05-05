/**
@Params: An array of strings
@Description: Takes in an array of strings and returns an array of all of the unique strings
*/
const removeDuplicates = arr => {
    const duplicates = {}
    const uniques = []

    for (let i = 0; i < arr.length; i += 1) {
        if (!duplicates?.[arr[i]]) {
            uniques.push(arr[i])
            duplicates[arr[i]] = true
        }
    }
    return uniques
}

//Tests
const simpleArrayWithDuplicates = ['a', 'b', 'a', 'c', 'd']
const complexArrayWithDuplicates = ['hi', 'hello', 'world', 'hello']
testOne = removeDuplicates(simpleArrayWithDuplicates)
testTwo = removeDuplicates(complexArrayWithDuplicates)
console.log(testOne) //[ 'a', 'b', 'c', 'd' ]
console.log(testTwo) // [ 'hi', 'hello', 'world' ]

/**
* duplicates object keeps track 
  of values already present in 
  the array. If the function sees 
  that value in the object, it 
  doesn't get added to the new 
  array. Returned, is an 
  array with all duplicates 
  removed

* This only performs one loop and  gives a space time 
  complexity of O(n)

* big-O notation meaures the 
  time/memory needed when an 
  algorithm is executed. O(n) has 
  a linear time complexity. 
  Meaning that, passing 3 
  arguments, will take 3 times as 
  long as when passing 1 argument.

* Thank you for coming to my ted talk :)
  */