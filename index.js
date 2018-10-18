console.log("Hello JS OOP World");

// Object Literal Syntax - simple way of defininf an objects
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

// Factory Function
function createCircle(radius) {
    return {
        radius: 1,
        draw: () => console.log('Drawing from Factory object')
    }   
}

let circle2 = createCircle(1);
circle2.draw();

// Constructor Function
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

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Value Types (PRIMITIVES)  Reference Types
// -------------------------|-----------------
//  Number                  |  Objects
//  String                  |  Function
//  Boolean                 |  Array
//  Symbol
//  undefined
//  null

// Primitives are copied by their value
// Ex. 1 The value of X is copied to Y
let x = 10, y; y = x; y = 20;
// Ex. 2 num doesn't change on the global scope because the function received a copy
let num = 9; function increase(num){ num++; }; increase(num);

// Objects (and other ref. types) are copied by reference
// Ex. 1 Both variables point to the same object
let w = { value: 5 }, z = w; w.value = 3;
let obj = { num: 9 }; function increase2(obj){ obj.num++; }; increase2(obj);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Objects are dynamic
//  we can add and delete them whenever we want 

// Dot Notation
//  clean syntax
circle2.location = { x: 1, y: 2};

// Bracket Notation
//  dynamic properties
//  enables the use of invalid identifiers as property names
const propertyName = '1st-location'; 
circle3[propertyName] = { x: 1, y: 2};

// we can also delete attributes
delete circle3['1st-location'];

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Enumerating Properties
for (let key in circle4) {
    if (typeof circle4[key] !== 'function') // just attributes, exclude methods
    console.log(key, circle4[key]);
}

// Access keys of an Object
let keys = Object.keys(circle4);

// Check for existance of a property or method
let radiusProperty = 'radius';
let hasRadius = radiusProperty in keys;  // TODO - Verify Cause of error 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Abstraction

function Square(height) {

    // Public properties and methods
    this.height = height;
    this.width = height;
    this.draw = () => {
        console.log("Square created by Constructor");
        hiddenMethod();
    };

    // Private properties and methods (local variables)
    let hiddenProperty = 0.3;
    let hiddenMethod = () => {
        console.log('hidden property + height', hiddenProperty + this.height);
        console.log('This method is encapsulated');
    };

    // Getters and Setters
    let location = { x: 0, y: 0};
    Object.defineProperty(this, 'location', {
        get: () => { return location; },
        set: (newLocation) => {
            location = newLocation;  // TODO - Validation is needed
        }
    });
}

let square = new Square(3);
square.draw();