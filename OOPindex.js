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

