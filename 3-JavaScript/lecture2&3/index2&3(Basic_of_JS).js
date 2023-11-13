// console.log("Lets start ");

//creating an object

// let rectangle ={

//     length:1,
//     breadth:5,

//     draw: function(){
//         console.log('draw');
//     }
// };

//Object creation
//1--> Factory Function
//2-> Constructor Function

//*************Factory function *******
// in this first we create object and then return the object
// function createRectanle(){

// let rectangle ={

//     length:1,
//     breadth:5,

//     draw: function(){
//         console.log('draw');
//     }
// };
//    return rectangle;
// }

// let Factory=rectangle;
// console.log(Factory);

//parameter function
// function createRectangle(length , breadth){

//     let rectangle ={

//         length:length,
//         breadth:breadth,

//         draw: function(){
//             console.log('draw');
//         }
//     };
//        return rectangle;
//     }

//     let rectangleObj1=createRectangle(6,8);

//2)****************** Constructor function******

// function Rectangle(){
//   this.length =1;
//   this.breadth=2;
//   this.draw=function(){
//     console.log('drawing');
//   }
// }

//object creation using constructor function

//let rectangleObject = new Rectangle();

//Adding new properties in a object
// rectangleObject.color='yellow';
// console.log(rectangleObject);

//removing the properties from the object
// delete rectangleObject.color;
// console.log(rectangleObject);

//calling by using constructor
// rectangleObject.constructor;

//Function is also an object and every object have constructor

//premitive data types--> in this case create a copy by their values

// let a=8;
// function inc(a){  // a is premitive and it crerate copy so due to this value of a is not increase

//   a++;
// }

// inc(a);
// console.log(a);

//pass by refrence
// let a=8;
// function inc(){

//   a++;
// }

// inc(a);
// console.log(a);

//or

// let a ={value:10 };

// function inc(a){
//   a.value++;
// }

// inc(a);

// console.log(a.value);

// All functions, arrays, objects are Refrencs

// All Numbers, bool, String, undefined, null are premitive data types

// let rectangle = {
//   length: 2,
//   breadth: 4,
// };

//for-in loop
// for(let key in rectangle){
//   console.log(key, rectangle[key]);
// }

//for-of loop
// for(let key of Object.entries(rectangle)){
//   console.log(key);
// }

//***********object clone**********
/*
let src = {
  a: 10,
  b: 20,
  c: 30,
};
let dest = {};

for (let key in src) {
  dest[key] = src[key];
}

console.log(dest);

src.a++;
console.log(dest);
 */

//for exact showing
/*
let message=
`This is 
 Akshay 
 Sumbare`;

 console.log(message); 
 */

//dynamically adding any name

/*
 let lastName='Sumbare';

 let message=
 `Hello Akshay ${lastName}
 good by`;

 console.log(message);  
 */

//****************Date And Times************* */

//  let date = new Date();
//  console.log(date);

//  let date3 =new Date(1998, 06,20, 7);
//  console.log(date3)

//*****************Arraya******** */

// let number=[1,2,3,4,5];
// number.push(14);//for end add
// number.unshift(6); //for front add
// number.splice(2,0,5); // for any position
// console.log(number);

// //searching
// console.log(number.indexOf(3));

/*
let courses = [
  { no: 1, name: "Akshay" },
  { no: 2, name: "Sumbare" },
];
console.log(courses);

let store = courses.find(function (courses) {
  return courses.name == "Sumbare";
});

console.log(store);
  */


//*************Removing Element********/

//let number=[1,2,3,4];

//removing last one
//number.pop();
// console.log(number);


//tremoving first one
//number.shift();
//console.log(number);

//Removing middle one
// number.splice(2,1); 
// console.log(number);


//**********************Mapping Array************** */
//used to map each element of array to someone else 
let number=[1,2,3,4,6];

let items = number.map(function(value){
  return 'student_no' +value;
})
console.log(items);