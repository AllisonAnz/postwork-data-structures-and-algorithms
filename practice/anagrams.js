// node questions/anigram
// Fun with Anagrams
// Given an array of strings, remove each string that is an anagram of an earlier string, then return the remaining array in sorted order

str = ['code', 'doce', 'ecod', 'framer', 'frame']
//'code' and 'doce' are anagrams. Remove 'doce' from the array and keep the first occurrence 'code' in the array.
// 'code' and 'ecod' are anagrams. Remove 'ecod' from the array and keep the first occurrence 'code' in the array.
// 'code' and 'framer' are not anagrams. Keep both strings in the array.
// 'framer' and 'frame' are not anagrams due to the extra 'r' in 'framer'. Keep both strings in the array.
// Order the remaining strings in ascending order: ['code','frame','framer'].

function funWithAnagrams(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = array.length - 1; j > i; j--) {
            let sortedA = array[i].split("").sort().join("")
            let sortedB = array[j].split("").sort().join("")
            if (sortedA === sortedB) {
                array.splice(j, 1)
            }
        }
    }
    return array.sort()
}

result = funWithAnagrams(str)
console.log(result)

//console.log(el.charAt(el.length - 1))