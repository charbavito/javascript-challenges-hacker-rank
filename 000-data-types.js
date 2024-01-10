const secondInteger = 12
const secondDecimal = 4.32
const secondString = 'is the best place to learn and practice coding!'

function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';

    console.log(firstInteger + parseInt(secondInteger))
    console.log(firstDecimal + parseFloat(secondDecimal))
    console.log(firstString + secondString)
}

performOperation(secondInteger, secondDecimal, secondString)