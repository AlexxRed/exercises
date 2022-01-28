
// its polindrome or not

function numberIsPalindromeOrNot(string) {

const numberForCheck = Number(string);

const arrOfString = [...string].reverse();
const stringNumber = arrOfString.join('')

const reverseNumber = Number(stringNumber)
console.log(reverseNumber)

console.log(string === stringNumber);
    
return reverseNumber === numberForCheck
    
}

console.log(numberIsPalindromeOrNot('1234321'))
console.log(numberIsPalindromeOrNot('1234'));
console.log(numberIsPalindromeOrNot('111111'));