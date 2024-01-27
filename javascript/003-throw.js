let numbers = [1, 0, -9, 35, -8]

function IsPositive(number) {
    try {
      if(number < 0){
        throw 'Negative Error';
      } else if (number === 0){
        throw 'Zero Error';
      } else if (number > 0) {
        return 'YES'
      } else {
        throw 'NaN'
      }
    } catch (err) {
      return err
    }
}

for(let i = 0; i < numbers.length; i++){
  console.log(IsPositive(numbers[i]))
}
