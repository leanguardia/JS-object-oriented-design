// 4. Passing Values and References
// 5. CRUDing properties and values

// 4. Value Types (PRIMITIVES)  Reference Types
// -------------------------|-----------------
//  Number                  |  Objects
//  String                  |  Function
//  Boolean                 |  Array
//  Symbol
//  undefined
//  null

// Primitives are copied by their value
// Ex. 1 The value of X is copied to Y
let x = 10, y;
y = x; 
y = 20;

// Ex. 2 num doesn't change on the global scope because the function received a copy
let num = 9; 
function increase(num){ num++; };
increase(num);

// Objects (and other ref. types) are copied by reference
// Ex. 1 Both variables point to the same object
let w = { value: 5 }, z = w;
w.value = 3;
let obj = { num: 9 };
function increase2(obj){ obj.num++; };
increase2(obj);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 5. CRUDing properties and values

// Objects are dynamic
//  we can add and delete them whenever we want 

// Dot Notation
//  clean syntax
let circle = { 
    radius: 3,
    draw: ()=> console.log("Drawing"),
}
circle.location = { x: 1, y: 2};

// Bracket Notation
//  dynamic properties
//  enables the use of invalid identifiers as property names
const propertyName = '1st-location'; 
circle[propertyName] = { x: 1, y: 2};

// we can also delete attributes
delete circle['1st-location'];

// Enumerating Properties
for (let key in circle) {
    if (typeof circle[key] !== 'function') // just attributes, exclude methods
        console.log(key, ':', circle[key]);
}

// Access keys of an Object
let keys = Object.keys(circle);

// Check for existance of a property or method
let radiusProperty = 'radius';
let hasRadius = radiusProperty in keys;  // TODO - Verify Cause of error 