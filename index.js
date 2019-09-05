
 //let name='Savita'; // let instead of var
 //console.log(name)   // can not contain space or hyphen. 
  //Use Camelcase eg firstName . 
  //They are case sensitive Should be meaningful

  const interestRate = 0.3; // Define Constant
  console.log(interestRate);

  //primitive data types - There are 5
  let name = 'Dhruv'; //string type
  let age = 20; // number type
  let isWorking = true // boolean
  let schoolName = undefined; // Explicitely setting to undfined. If don't assign any value, it is undefined implicitely.
  let color = null; // Null type, in case one of the values can be null. Example choose color

  //ReFererence Types
  //Object
  //Array
  //Function

  // Person Object defined
  let person = {
      name: 'Savira',
      age: 40
  };

  //dot notation
  person.name = 'Johm';
  console.log(person.name);

  //bracket notation

  person['name'] ='Mary';
  console.log(person['name']);

  //Array

  let selectedMyColors = []; //empty array
  let selectedColors = ['red','blue'];
  console.log(selectedColors);

  selectedColors[2] = 'green'; // dynamically added third element
  selectedColors[3] = 3; // can add different type
  console.log(selectedColors)
  console.log('Size of an array :' + selectedColors.length) // has all properties and methods of array

  // Functions

  function greet() {
      console.log('Hello World');
  }

  greet();

  function greetPerson(name){
    console.log('Hello ' + name);

  }

  greetPerson('John');
  greetPerson('Mary');

  function greetPersonLastname(name , lastName){
    console.log('Hello ' + name +' '+ lastName);

  }

  greetPersonLastname('John','Smith');

  //Calculate

  function square(num) {
    return num * num;

  }

  console.log(square(2));