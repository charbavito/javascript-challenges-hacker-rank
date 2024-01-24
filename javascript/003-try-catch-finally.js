// const s = '1234' // default input to challenge - case try successful
const s = 1234  // default input to challenge - case catch error successful

function ReverseString(s){
  try{
    const str = s.split('').reverse().join('')
    return str
  } catch (error){
    return error.message + '\n' + s;
  }
}
console.log(ReverseString(s))