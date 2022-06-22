// Square

console.group("Square");

// const squreSide = 5;
// console.log(`Square sides length are ${squreSide} cm`);
// const squarePerimeter = squreSide * 4;
// console.log(`Square perimeter is ${squarePerimeter} cm`);
// Funtion: Square Perimeter
function squarePerimeter(squareSideLength) {
    return squareSideLength * 4;
}

// const squareArea = squreSide * squreSide;
// console.log(`Square area is ${squareArea} cm2`);
//Function: Square Area
function squareArea(squareSideLength) {
    return squareSideLength * squareSideLength;
}

console.groupEnd();

// Triangle

console.group("Triangle");
// const triangleSideA = 6;
// const triangleSideB = 6;
// const triangleSideBase = 4;
// const triangleHeight = 5.5;
// console.log(`Triangle sides length are ${triangleSideA} cm, ${triangleSideB} cm and ${triangleSideBase} cm`);

// const trianglePerimeter = triangleSideA + triangleSideB + triangleSideBase;
// console.log(`Triangle perimeter is ${trianglePerimeter} cm`);

// Triangle perimeter function
function trianglePerimeter(sideA, sideB, base) {
    return sideA + sideB + base;
}

// const triangleArea = (triangleSideBase + triangleHeight) / 2;
// console.log(`Triangle area is ${triangleArea} cm2`);

//Triangle area function
function triangleArea(triangleHeight, triangleBase) {
    return (triangleHeight * triangleBase) / 2;
}

console.groupEnd();

// Circle

console.group("Circle");
// const circleRadius = 4;
// const circleDiameter = circleRadius * 2;
// const PI = Math.PI;
// const ciclePerimeter = circleDiameter * PI;
// const circleArea = (circleRadius * circleRadius) * PI;

// console.log(`Circle radius is ${circleRadius} cm`);
// console.log(`Circle diameter is ${circleDiameter} cm`);
// console.log(`PI is ${PI}`);
// console.log(`Circle perimeter is ${ciclePerimeter} cm`);
// console.log(`Circle area is ${circleArea} cm2`);

// Circle diameter function 
function circleDiameter(circleRadius) {
    return circleRadius * 2;
}

// Circle perimeter function 
function circlePerimeter(circleRadiusLength) {
    return circleDiameter(circleRadiusLength) * Math.PI;
}

// Circle area function
function circleArea(circleRadius) {
    return (circleRadius * circleRadius) * Math.PI;
}

console.groupEnd();


// Square HTML/JS integration

function calcSquarePerimeter() {
    const value = document.getElementById("squareValue").value;
    const sqrPerimeter = squarePerimeter(value);
    document.getElementById("squareCalcResults").innerHTML = `<p>the square perimeter is ${sqrPerimeter} cm</p>`;
}

function calcSquareArea() {
    const value = document.getElementById("squareValue").value;
    const sqrArea = squareArea(value);
    document.getElementById("squareCalcResults").innerHTML = `<p>the square area is ${sqrArea} cm2</p>`;
}

// Triangle HTML/JS integration

function calcTrianglePerimeter() {
    const valueA = parseInt(document.getElementById("valueSideA").value); 
    const valueB = parseInt(document.getElementById("valueSideB").value); 
    const valueBase = parseInt(document.getElementById("valueBase").value); 
    const triPerimeter = parseInt(trianglePerimeter(valueA, valueB, valueBase));
    document.getElementById("triangleCalcResults").innerHTML = `<p>the triangle perimeter is ${triPerimeter} cm</p>`;
}

function calcTriangleArea() {
    const valueBase = parseInt(document.getElementById("valueBase").value); 
    const valueHeight = parseInt(document.getElementById("valueHeight").value); 
    const triArea = triangleArea(valueBase, valueHeight);
    document.getElementById("triangleCalcResults").innerHTML = `<p>the triangle area is ${triArea} cm2</p>`;
}

// Circle HTML/JS integration 

function calcCirclePerimeter() {
    const value = document.getElementById("circleValue").value;
    const circlePer = circlePerimeter(value);
    document.getElementById("circleCalcResults").innerHTML = `<p>the circle perimeter is ${circlePer} cm</p>`;
}

function calcCircleArea() {
    const value = document.getElementById("circleValue").value;
    const cirArea = circleArea(value);
    document.getElementById("circleCalcResults").innerHTML = `<p>the circle area is ${cirArea} cm2</p>`;
}