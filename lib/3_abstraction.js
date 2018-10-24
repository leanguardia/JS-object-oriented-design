// 6. Abstraction

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
        console.log('This method is encapsulated');
        console.log('hidden property + height', hiddenProperty + this.height);
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