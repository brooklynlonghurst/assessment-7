//1) Sum Zero
//   Runtime Complexity: O(n^2) quadratic because each time the inner loop iterates it will multiply by the outer loop.
//   Space Complexity: O(1) constant because memory does not grows with the input

let array = [1, 2, 3]
let value = false; 

for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
        if (i !== j){
            if(array[i] + array[j] === 0){
                value = true;
            }
        }
    }
} console.log(value)


//2) Unique Characters
//   Runtime Complexity: O(n^2) quadratic because each time the inner loop iterates it will multiply by the outer loop.
//   Space Complexity: O(1) constant because memory does not grows with the input

function hasUniqueChars(str){
    for (let i = 0; i < str.length; i++){
        let curChar = str[i]
        for (let k = 0; k < str.length; k++) {
            let compareChar = str[k]
            if(i !== k && compareChar === curChar){
                return false
            }
        }
    }
    return true
}
console.log(hasUniqueChars('Monday'))
console.log(hasUniqueChars('Moonday'))


//3) Pangram Sentence 
//   Runtime Complexity: O(n) linear because there is a growing rate of sentence
//   Space Complexity: O(1) constant because memory does not grow with the input

function isPangram(sentence){
    let sentenceLowerCase = sentence.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

    for(let i = 0; i < alphabet.length; i++){
        if (sentenceLowerCase.indexOf(alphabet[i]) < 0){
            return false
        }
    }
    return true
}

console.log(isPangram('the quick brown fox jumps over the lazy dog'))
console.log(isPangram('i like cats, but not mice'))

//4) Longest Word
//   Runtime Complexity: O(n) linear because there is a growing rate of words.length 
//   Space Complexity: O(n) linear because memory grows at a linear rate as the input length grows

function findLongestWord(str) {
    let words = str.split(' ');
    let longest = 0;
  
    for(let i = 0; i < words.length; i++) {
      if (words[i].length > longest) {
        longest = words[i].length;
      }
  
    }
    return longest;
}

console.log(findLongestWord('hi, hello'))