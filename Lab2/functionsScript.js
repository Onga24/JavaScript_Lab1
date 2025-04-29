
//     1- Function accept a full name string and convert each letter of
//     first world to Capital and the remaining to small (Pascal
//     Case). Example : 'the quick brown fox'
//     Output : 'The Quick Brown Fox'

function upperCase(name) {
    return name 
        .split(' ')                   
        .map(word => word.charAt(0).toUpperCase() +  word.slice(1).toLowerCase() + " ") 
        .join('');                    
}

//     2- Function that accept a sentence and return the longest word
//     within the input
//     Example : 'Web Development Tutorial'
//     Output : 'Development'
function LongestWord(phrase) {
    const word = phrase.split(' ');
    if (word.length === 0) return ''; 
    const longWord = word.sort((a, b) => b.length - a.length);
    return longWord[0];
}


//     3- Write a JavaScript Function that returns a passed string with
//     letters in alphabetical order
//     Example : javascript
//     Output : aacijprstv
function alpha_ord(word){
    const s = word;
    const sorted = s.split("").sort().join("");
    return sorted;
}

//     4- Write a function that takes two arrays and returns an array of common
//     elements using filter() or a loop.
//     Example: const arr1 = [1, 2, 3]; const arr2 = [2, 3, 4]; Returns [2, 3].

function common_elem(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

//     5- make Array of duplicates numbers and remove it in new array

function rm_duplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
