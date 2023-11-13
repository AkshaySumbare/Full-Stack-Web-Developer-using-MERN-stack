// Asynchronous code

//Asynchrous code
/*
setTimeout(function(){
    console.log('first');
})

//synchrous code
function sync(){
    console.log('second');
}
sync();

console.log('third');
//output
//second
//third
//first becz setTimeout function call when call stack is empty 
// to thus the preessential condition is to execute all 
// other code so firstly run sync() and console.log('third )
//then setTimeout execute
  */

//******************Promise *********/
//Promise object represent the event completion or failure of an asynchronous operation
//it could deal pending or fulfill or rejected state
// let meraPromise = new Promise(function(resolve, reject){
//    console.log('I am inside promise');
//    resolve(2001);
// })
// console.log('Pehla');

//***************Resolve******** */
// let meraPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//    console.log('I am inside promise');
//     },5000);
//    resolve(2001);
// });
// console.log('Pehla');

//***********Reject******** */
/*
let meraPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
   console.log('I am inside promise'); 
    },5000);
   reject(2001);
});
console.log('Pehla');
  */

//****************Multiple promise create*********/
/*
let wadda1 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log('settimeout1 started');

    },2000);
    resolve(true);
})

 let output = wadda1.then(()=>{
    let waadaa2 = new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log('setimeout2 started');
        },3000);
        resolve("waada 2 resolved");
    })
    return waadaa2;
})

output.then((value)=> console.log(value));
*/
//output will be
//waada 2 resolved
//settimeout1 started
//setimeout2 started

//Async-await--->Special syntax used work with promise
//await help to stop the second one until first one execute

// async function abcd(){
//     return 7;
// }
// abcd();

//eg.

/*
async function utility() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Delhi is hot");
    },10000);
  });

  let hydWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hydrabad is hot");
    },20000);
  });

  let dM = await delhiWeather;
  let hM = await hydWeather;

  return [dM, hM];
}
console.log(utility());
*/

//Feath api return Promise

//let content = fetch('https://jsonplaceholder.typicode.com/posts/1');

//*************Closures*********** */
//it contain functions and functions parameteres(refrences)  data 

let name = "Sher";
function init() {
  let name = "Mozallia";
  function displayName() {
    let name = "Akshay ";

    console.log(name);
  }
  displayName();
}
init();
