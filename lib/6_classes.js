
// 9. ES6 Classes

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}.`
    }

    static requiredAttributes() {
        return Object.keys(new Book());
    }
}

let book1 = new Book('Lairy', 'Pat Rothfuss', '2013');

// Internaly is still using prototypes.
console.log(book1);
console.log(book1.getSummary());

// sending a Class method
console.log(Book.requiredAttributes());


// Inheritance ES6

class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }

    getSummary() {
        // return `${this.title} was written by ${this.author} 
        // in ${this.month}, ${this.year}.`
        return super.getSummary() + ` in ${this.month}`
    }
}

let magazine = new Magazine('Darnkess', 'Pat Rothfuss',
                            '2014', 'Oct');

console.log(magazine);
console.log(magazine.getSummary());