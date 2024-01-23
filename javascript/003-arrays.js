// const arrayNums = [2, 3, 6, 6, 5] // default input to challenge - case 01
// const arrayNums = [10, 9, 9, 8, 8, 11, 8, 0, 9, 1] // default input to challenge - case 02
const arrayNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // default input to challenge - case 03


function GetSecondLargestNumber(arrayNums){
  arrayNums = arrayNums.sort(function(a, b){return b-a}) // sort with compare function
  for(let i = 0; i <= arrayNums.length; i++){
    if(arrayNums[i] !== arrayNums[i+1]){
    return arrayNums[i+1]
    break
  }
  }
}
console.log(GetSecondLargestNumber(arrayNums))