// Java Script is a Single Threaded Language ie. processing one command at a time 
// JS Doesn't execute multiple functions/lines at a time ,rather than execute one by one 
//*********************************Performance*************** */
//adding 100 para
//to check time

/*
const t1 = performance.now();
for (let i = 1; i <= 100; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is para No " + i;

  document.body.appendChild(newElement);
}
const t2 = performance.now();
console.log("This took "+ (t2-t1)+ "ms");

//*************optimizing a bit***********8
//to know the time of code using performance.

const t3 = performance.now();
let myDiv = document.createElement("div");

for (let i = 1; i <= 100; i++) {
  let element = document.createElement("p");
  element.textContent = "This is para" + i;

  myDiv.appendChild(element);
}
document.body.appendChild(myDiv);
const t4 = performance.now();
console.log("This took "+ (t4-t3)+ "ms");
  

//***************Reflow and Reprint************* */
//Reflow-->All mathematical calculation in a web page is done by the process is called Reflow eg. dimension size,positioning etc.
//Reprint--> And this new containt to show pixel by pixel on screen is called Reprint
// process---> Reflow--->then Reprint

//******************Document Fragment *********
//it is a light weight document object
// jelp to optimize the code
/*
const t5 = performance.now();
let Fragment = document.createDocumentFragment();
for (let i = 1; i <= 100; i++) {
    let newElement = document.createElement("p");
    newElement.textContent = "This is para No " + i;
  
    Fragment.appendChild(newElement);
  }
  document.body.appendChild(Fragment); //1 Reflow and 1 Reprint 
  const t6 = performance.now();
console.log("This took "+ (t6-t4)+ "ms");
  */
  

//***********************Event Loop*************** */
//process of execution ie . stack ie. first main(), then functions execution process . as we shouls 
// No that after again the stack empty then and then only our click function will execute.
//the entry goes to que from browser. 
// to see detail see video no 49 -->55 minute onward 
// in this Event loop process que execute asink code only when call stack is empty.



//********************Set time out method*************  */
// in this we have two parameter one id function and another is time after which we want to
// excecute function and this time is minimum time 
//eg.
 setTimeout(function(){
  console.log('Hello Everyone');
 }, 5000);// in this after 5 second it will execute hello 
 //ie. browser put this function in que after 5 second and then que run it whenever call stack is empty
 

