// Square

console.group("square");
const squreSide = 5;
console.log(`Square sides length are ${squreSide} cm`);

const squarePerimeter = squreSide * 4;
console.log(`Square perimeter is ${squarePerimeter} cm`);

const squareArea = squreSide * squreSide;
console.log(`Square area is ${squareArea} cm2`);
console.groupEnd();

// Triangle

console.group("Triangle");
const triangleSideA = 6;
const triangleSideB = 6;
const triangleSideBase = 4;
const triangleHeight = 5.5;

console.log(`Triangle sides length are ${triangleSideA} cm, ${triangleSideB} cm and ${triangleSideBase} cm`);

const trianglePerimeter = triangleSideA + triangleSideB + triangleSideBase;
console.log(`Triangle perimeter is ${trianglePerimeter} cm`);

const triangleArea = (triangleSideBase + triangleHeight) / 2;
console.log(`Triangle area is ${triangleArea} cm2`);

console.groupEnd();

// Circle

console.group("Circle");
const circleRadius = 4;
const circleDiameter = circleRadius * 2;
const PI = Math.PI;
const ciclePerimeter = circleDiameter * PI;
const circleArea = (circleRadius * circleRadius) * PI;

console.log(`Circle radius is ${circleRadius} cm`);
console.log(`Circle diameter is ${circleDiameter} cm`);
console.log(`PI is ${PI}`);
console.log(`Circle perimeter is ${ciclePerimeter} cm`);
console.log(`Circle area is ${circleArea} cm2`);

console.groupEnd();







