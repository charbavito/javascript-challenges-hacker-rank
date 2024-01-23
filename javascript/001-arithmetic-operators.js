const length = 3;
const width = 4.5;

// area calcs
function getArea(length, width) {
    let area = length * width;
    return area;
}

// perimeter calcs
function getPerimeter(length, width) {
    let perimeter = 2 * ( length + width)
    return perimeter;
}

console.log(getArea(length, width));
console.log(getPerimeter(length, width));