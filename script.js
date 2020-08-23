const dimInput1 = document.getElementById("dim-1-input");
const dimInput2 = document.getElementById("dim-2-input");
const shapeSelect = document.getElementById("shape-select");
const shapeForm = document.getElementById("shape-form");
const tableBody = document.getElementById("shapes-table-body");

shapeForm.addEventListener("submit", function(e) {
  e.preventDefault();

  let shape = new Shape(shapeSelect.value,dimInput1.value,dimInput2.value);
  createTableRow(shape)
  // Task 1: create a e instance passing it
  // the required dimensions the selected input

  // Task 2: Call the function 'createTableRow' passing it the
  // object instance created in task 1
});

function createTableRow(shape) {
  const row = document.createElement("tr");
  row.innerHTML = `
  <td>${shape.getType()}</td>
  <td>${shape.getDimension1()}</td>
  <td>${shape.getDimension2()}</td>
  <td>${shape.calculateArea()}</td>
  <td>${shape.calculateCircumference()}</td>
  `;

  tableBody.appendChild(row);
}

const types = [
  { id: 0, name: "Circle" },
  { id: 1, name: "Square" },
  { id: 2, name: "Rectangle" },
  { id: 3, name: "Triangle" }
];

// Task 3: create the Shape class
// with constructor taking a type and 2 dimenstions
// Use the types enumerator above to map select-box ids to types
class Shape {
  constructor(type,dimension1,dimension2){
    this.type = types.find(el => el.id == type);
    this.dimension1= dimension1;
    this.dimension2= dimension2;
  };
  getType() {
    return this.type.name; 
  }
  getDimension1(){
    return this.dimension1;

  }
  getDimension2(){
    return this.dimension2;
    
  }
  calculateArea(){
    if (this.type.id==0){
      // console.log(Math.floor(Math.PI*(this.dimension1**2)))
      return Math.floor(Math.PI*(this.dimension1**2));
    }
    else if (this.type.name==="Square"){
      // this.dimension2==this.dimension1;
      return this.dimension1 ** 2;
    }
    else if (this.type.name==="Rectangle"){
      return this.dimension1 * this.dimension2;
    }
    else {
      return (this.dimension1 * this.dimension2)/2;
    }

  }

  calculateCircumference(){
    if (this.type.name=="Circle") {
      return Math.floor(Math.PI*2*this.dimension1);
    }
    else if(this.type.name=="Square"){
      return this.dimension1*4;
    }
      
    else if(this.type.name=="Rectangle"){       
      return 2*(parseInt(this.dimension1,10)+parseInt(this.dimension2,10));
    }
    else {
      return ("It's complicated!!")
    } 
  }
  
}
/*
The class should hold these properties
- type
- dimension1
- dimension2

and it should hold these methods
- getType()
- getDimension1()
- getDimension2()
- calculateArea()
- calculateCircumference()


Area and circumference calculation should be type dependant
if the shape have only 1 dimension, dimesion 2 can be undefined

for circles, let dimension1 be the radius

for triangle circumference, jus return "it's complicated"

Search on how to get PI value from JS library.
*/