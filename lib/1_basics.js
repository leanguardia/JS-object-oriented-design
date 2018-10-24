// 1. Object Literal
// 2. Factory Function
// 3. Constructor
//  3.1. Functions are objects

// 1. Object Literal Syntax - simple way of defininf an objects
let circle = {
    radius: 1,
    location: {
        x: 1,
        y: 2,
    },
    draw: () => console.log('Drawing')
};
// creating new circles is an issue only if they have behaviour

circle.draw();

// 2. Factory Function
function createCircle(radius) {
    return {
        radius: 1,
        draw: () => console.log('Drawing from Factory object')
    }   
}

let circle2 = createCircle(1);
circle2.draw();

// 3. Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = () => console.log('Drawing from Constructur object')
}
// implicit return, this happens automatically

let circle3 = new Circle(3); // we use new to make 'this' reference the object
circle3.draw();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Constructor Property, every object has it

// circle.constructor 
// > ƒ Object() { [native code] }
// circle2.constructor 
// > ƒ Object() { [native code] }

// circle3.constructor 
// > ƒ Circle(radius) {
// >     this.radius = radius;
// >     this.draw = () => console.log('Drawing from Constructur object')
// > }

// new String(); // '', "", ``
// new Boolean(); // true, false
// new Number(); // -1, 0, 3, 44.32

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Functions are Objects

// > Circle.constructor
// > ƒ Function() { [native code] }

const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = () => console.log('Drawing from new Function Constructor')`
);

let circle4 = new Circle1(4);
//same as Circle.call({}, 4); // you can pass the  
//same as Circle.apply({}, [4]); // useful if you already have and array to pass it

circle4.draw();