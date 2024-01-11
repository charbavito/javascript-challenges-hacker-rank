const n = 4 // default input for challenge test
let fact = 1

function factorial(n){
    for(let i = 0; i < n; i++ ){
        fact = fact * (n - i)
    }
    return fact
}

console.log(factorial(n))