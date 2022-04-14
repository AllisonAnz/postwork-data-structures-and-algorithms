// How to set up a matix
const myMatrix = [];
const rows = 5;
const columns = 3;

for (var i = 0; i < rows; i++) {
    myMatrix[i] = [];
    for (var j = 0; j < columns; j++) {
        myMatrix[i][j] = (i * columns) + j;
    }
}

console.log(myMatrix);

