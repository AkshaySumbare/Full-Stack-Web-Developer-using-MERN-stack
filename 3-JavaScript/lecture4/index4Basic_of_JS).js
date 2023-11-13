//******************Function*************** */
// A block of code that fulfill a specific task
//Synatx name
// function function_name(parameters){
//}


//function decleration 
// function run() {
//   console.log("running");
// }

// //function call
// run();

//another way
// this way also work becz due to hoisting process in which function declaerd at the top of file
//but hoisting only work on function decleration not on function assignment
// run();
// function run() {
//   console.log("Running");
// }


//function assignment 
// 
// store(); ---> Not work 
// let store= function call(){
//     console.log('play ');
// }


//Named function 
// let stand = function sum(){
//     console.log("yes");
// }

// //Anonymous function
// let stand2 = function(){
//     console.log("Yes");
// }



//*************For multiple parameters we can use following */
/*
function sum(a,b){
   let total =0;
   for(let value of arguments)
       total = total + value;
   return total;
}

let ans = sum(1,2,3,4,5); // here we can pass n numbers 
console.log(ans);
*/

// function sum(...args){
//     console.log(args);
// }

// sum(1,2,3,2,3)


//***********Default parameters *******
//not: in case of default parameter after starting anyone one all left side should get parameter else show error
// function interest(p,q=3,r=9){ // here value of q and r are default
//     return p*q*r/100;
// }

// console.log(interest(10));


//**************getter and setter********

let person = {
    fName : 'Akshay',
    lName : 'Sumbare',
    get fullName(){
      return `${person.fName} ${person.lName}`;
    },

    set fullName(value){
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};

//calling getter 
//console.log(person.fullName);

//calling setter 
person.fullName ='Raj kumar';
console.log(person.fullName);


