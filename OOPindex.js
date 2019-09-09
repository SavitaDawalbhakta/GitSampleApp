// Object literal is a one way to define the object 
// However you have to repeat the code for defining multiple circle objects..
//It will be fine method as long as it has only properties however when multiple functions come it will be hard.
// Also, debugging will be time consuming as multiple places code needs to be corrected 

const circle = {
    radius : 1,
    location : {
        x : 1,
        y: 1
    },
    draw : function(){
        console.log('draw');
    }
};

circle.draw();

// Factories to define object is the solution for above
//It is called Factory Function

function createCircle(radius){
  return {
        radius : radius,
        draw : function(){
            console.log('draw');
        }
    };

}

const myCircle = createCircle(1).draw();

// Constructor Function
// function name starts with the capital letter.
// Uses this operator

function Circle(radius){
    this.radius = radius,
    this.draw = function(){
        console.log('draw');
    }
}

const another = new Circle(1).draw();


// functions are objects
Circle.length;
console.log('Length : ' +Circle.length); // Circle.length returns number of arguments.

// Value Type And Reference Type

let x = {value : 10};  // reference type

let y = x;

x.value = 20; // Y will also hold 20

// Adding / Removing Properties
// another is a Circle type of object
// add location property to it.

Circle.location = {x: 1};
createCircle.location = {x: 1}; // did not work though

const propertyName = 'location';
Circle[propertyName] = {x: 1}; // did not work

//remeove property

delete circle.location;

//Enumerating Property

for(let key in circle){       // logs available properties in circle object.
    console.log(key);
}


