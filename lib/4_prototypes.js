// JS OOP Crash Course (ES5 & ES6)
// https://www.youtube.com/watch?v=vDJpGenyHaA&t=430s

// 7. Prototypes

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

// All objects have a Prototype and inherits from it
// To avoid having 'getSummary' replicated in every mehthod
// we define it in its prototype, so all instances inherit
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}.`
}

let book1 = new Book('Name of Wind',
                     'Patrick Rothfuss',
                     '2011');

console.log(book1);
console.log(book1.getSummary());