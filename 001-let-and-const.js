const PI = Math.PI;
const r = 2.6; // default input for challenge test

// calc area
function calcArea(r){
    let area = (PI * (r * r));
    return area;
};

// calc perimeter
function calcPerimeter(r){
    let perimeter = (2 * PI * r);
    return perimeter
};

console.log(calcArea(r));
console.log(calcPerimeter(r));
