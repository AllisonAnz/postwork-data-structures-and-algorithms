//reverse a string
//method receives one argument (a string), expect to output that string with its letter in reverse

function reverseString(str) {
  let reverse_string = "" 
  for (let i = str.length - 1; i > -1; --i ){
    reverse_string = reverse_string + str[i];
  }
  return reverse_string;
}

if (require.main === module) {
  
  // add your own tests in here
  
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
//-------------------------------------------------
// create an empty string to hold the new string 
// create a for loop set the initial expression, conditional expression and increment expression
// length count starts at 1 and index count starts at 0 (str[i]) so we have to sub. 1 from the string.length 
// (i = string.length -1 ) set the inital expression to the string length - 1 
// we are going iterate over the string until the i is 0 (i > -1)
// decrement the str[i] until the the conditional expression is met 


// And a written explanation of your solution
//str = "lorem"
// i = (str.length-1) = 4 
// reversed = reversed + str[i] = 
// reversed = reversed + str[4] = m 
// reversed = reversed + str[3] = m + e = me 
// reversed = reversed + str[2] = me + r = mer 
// reversed = reversed + str[1] = mer + 0 = mero 
// reversed = reversed + str[0] = mero + l = merol 
// str[-1] is not greater than -1 
// loop stops 
// return reverse = merol 


