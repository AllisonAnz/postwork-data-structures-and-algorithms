// node questions/findcoordinates.js
//Given n integer coordinates. Find the sum of manhattan distaance between all pairs of coordinates 
// b/n two points ((x1, y1) and (x2, y2) is: |x1 – x2| + |y1 – y2|
// Example:
// Input: n = 4 
//        point1 = { -1, 5 }
//        point2 = { 1, 6 }
//        point3 = { 3, 5 }
//        point4 = { 2, 3 }
// Output: 22

// Return the sum of distace between all the pair of points 
function distanceSum(x,y,n){
  let sum = 0 
  //for each point, finding distance to rest of point
  for (let i=0; i<n; i++)
    for (let j=i+1; j<n; j++)
      sum += (Math.abs(x[i] - x[j]) + Math.abs(y[i] - y[j]))
      return sum
}

x = [-1, 1, 3, 2]
y = [5, 6, 5, 3]
n = x.length 
test = distanceSum(x, y, n)
console.log(test)

// Efficient Approach 
// Use Greedy Approach. 
// Manhattan formula can be decomposed into two independent sums 
// One for the difference between x coordinates 
// the second between y coordinates 
// now stick to compute the sum of x coordinates distance 
// continue for later....

