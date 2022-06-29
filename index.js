
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
//============================================================================================================================================================
// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
//(FIRST POSITIVE NUMBER)
// const numbers = [-4, -199, 1,2,3,1,4,6]
// const numbers = [9,1, 2, 3, 4, 6]
const numbers = [ 67, 9,1, 2, 3, 4,  6, 8, 9, 7, -21 ]


function findNumber(a){
  const sortNumbers = [...a].sort((a, b) => a - b)
  const maxArrNumber = Math.max(...a);
  // const minNumber = 1;
  let findNumbers = [];
  if(maxArrNumber >1){
    for (let i = 1; i < maxArrNumber; i++) {
      if(!sortNumbers.includes(i)){
        findNumbers.push(i)
      }

    }
  }
let findNumber = maxArrNumber+1
if (findNumbers.length !== 0){
  findNumber =findNumbers[0]
}
return findNumber
}
console.log(findNumber(numbers))
