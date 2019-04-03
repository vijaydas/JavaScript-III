/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. global/window binding: this will refer to the "the forest"
* 2. implicit binding: most common, this refers to what is left of the dot.
* 3. new binding: comes from the constructor function with the keyword "new"
* 4. explicit bonding: uses the array functions: .call, .apply, and .bind to explicitly state the referral
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function windowThis(name) {
    console.log(this.name)
}

windowThis("Stewie");


// Principle 2

// code example for Implicit Binding

const hello = function(object) {
    object.hello = function () {
        console.log(`Hello, my name is ${this.name}`);
    };
};

const homer = {
    name: 'Homer', 
    age: 45
};

const marge = {
    name: 'Marge',
    age: 40
};

hello(homer);
hello(marge);

homer.hello();
marge.hello();


// Principle 3

// code example for New Binding

const Dog = function(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
};

const Nellie = new Dog('Nellie', 'Labrador', 'Black');


// Principle 4

// code example for Explicit Binding