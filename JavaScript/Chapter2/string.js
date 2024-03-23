// 문자열 이어붙이기 예제
let str1 = "Hello";
let str2 = "World";

// 두 문자열을 이어붙여 새로운 문자열을 만듭니다.
let combinedStr = str1 + " " + str2;

console.log(combinedStr); // 출력: Hello World


function reverseString(str) {
    return str.split('').reverse().join('');
}

let input = "hello";
let reversed = reverseString(input);
console.log(reversed);



function removeDuplicates(str) {
    let result = '';
    for (let char of str) {
        if (result.indexOf(char) === -1) {
            result += char;
        }
    }
    return result;
}

let input2 = "hello";
let result = removeDuplicates(input2);
console.log(result); 




function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

let input3 = "racecar";
let isPalindromic = isPalindrome(input3);
console.log(isPalindromic); // 출력: true




function mostFrequentCharacter(str) {
    let charMap = {};
    let maxChar = '';
    let maxCount = 0;

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
        if (charMap[char] > maxCount) {
            maxCount = charMap[char];
            maxChar = char;
        }
    }
    
    return maxChar;
}

let input4 = "hello";
let mostFrequent = mostFrequentCharacter(input);
console.log(mostFrequent); // 출력: "l"