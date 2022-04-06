// Find the unique chars in a string and return the index + 1 format
function find(s) {

    const letterCounter = {}
    const u = []
    for (const letter of s) {
        if (letterCounter[letter])
            letterCounter[letter]++
        else letterCounter[letter] = 1
    }

    for (let i = 0; i < s.length; i++) {
        const stringLetter = s[i]

        if (letterCounter[stringLetter] === 1) {
            console.log(i + 1)
        }
    }
    -1
};

//tests

string = "haghae"
find(string)
//prints out the index of which the unique characters are in the string