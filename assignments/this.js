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

function windowThis(name){
    console.log(this.name);
    return name;
}

windowThis("Viva");

// Principle 2



// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding