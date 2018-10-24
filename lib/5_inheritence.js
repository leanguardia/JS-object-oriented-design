
// 8. Inheritence

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}.`
}

function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

// Inherit the prototype of Book to be able to use 'getSummery'
Magazine.prototype = Object.create(Book.prototype);

// To set the corresponding consructor
Magazine.prototype.constructor = Magazine;

let magazine = new Magazine('Sample Mag.', 'Forbes',
                            '2018', 'Sep');
console.log(magazine);
console.log(magazine.getSummary());