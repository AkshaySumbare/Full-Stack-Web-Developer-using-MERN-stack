
//********************************************Node js ********************************************************** */



//What is Node JS
//This is a Server Environment
//it can run javascript on server side that make javascript serverside
//Node js can connect with databases
// Js cant connect with databases becz. run on browser
//Node js use Chrome's v8 engine
//mostly used for API
//
// console.log("Hi");
// var x =20;
// if (x ==='20') {
//     console.log("True");
// }
// else{
//     console.log("False");
// }

// import {x} from './index1';
// console.log(x);  //Not working
//Solution is to
// const app = require('./index1');
// console.log(app);
// console.log(app.x);
// console.log(app.z());

// const arr=[2,4,5,5,6];
//  let result = arr.filter((item) =>{
//     //console.log(item);
//     return item===5;
// })
// console.log(result);

//*********To create a new file******* */
// const fs= require('fs');
// fs.writeFileSync("Hello.text", "code step by step");

// const fs= require('fs').writeFileSync;
// fs("abc.text", "abc");

//***********************************HTTP Request************************************************** */
//in node js we have take function as a parameter
//http module help to handle the req and resp in server of Nodejs

// const http = require('http');

// http.createServer((req, resp)=>{
//     resp.write("<h1>Hello jee, Good Morning </h1>");
//     resp.end();
// }).listen(4500);

// //we can also do it by

//  const http = require('http');
// function dataControl(req, resp){
//     resp.write("<h1>Hello Jee, Good ,,,Morning</h1>");
//     resp.end();
// }
// http.createServer(dataControl).listen(4500);

//Also by using arrow function

//  const http = require('http');
// const dataControl =(req, resp)=>{
//     resp.write("<h1>Hello Jee, Good ,,,Morning</h1>");
//     resp.end();
// }
// http.createServer(dataControl).listen(4500);

//*****************************************Package.json******************************************* */
/*
Package.json files consist detail about our project related code like vesion, commandes use, package installed etc.



*/

// colors = require("colors");
//console.log("hello".blue);

//****Nodejs is a Single Threaded ie. runs commands at a time only one******/
//if our node_modules files somehow delete then we just write in terminalie. npm install automatically all packages will
//install again we should not push modules on git

//*****Use Nodemoon for continous refresh of code */
//after install use in  terminal nodemon ./file name we want ot run
//console.log("Akshay");

//Nodejs is a async Language ie. it eg. there are 4 syntax so it run one by one but if let consider 2 syntax is complex
// and it takes time then it run 3 syntax not wait the second one same happen with javascript so due to this they
// are superfast

//***************************************Making a simple API***************************************** */

// const http = require('http');
// const data  = require('./data');
// http.createServer((req, resp)=>{
//     // in postman shows 200 -> ok, 201 -> created , 404-> not found, 500-> Server error
//     resp.writeHead(200, {'Content_Type': 'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(4500);

//console.log(process.argv[0]);

//*************************************Adding and Removing new file********************
// const fs  = require('fs');
// const input = process.argv;
// fs.writeFileSync(input[2], input[3])
// //after this in terminal use node index.js filename and descritption we want to add on it

// // Add and Remove the files in NodeJs
// if (input[2]== 'add') {
//     fs.writeFileSync(input[3], input[4])
// }else if(input[2]== 'remove'){
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log("Invalid output")
// }

//for remove use -> node index.js remove apple.txt

//******************************************Show File List************************************* */

// const fs = require('fs');
// const path  = require('path');
// const dirPath = path.join(__dirname, 'files');
// console.warn(dirPath);
// //create 5 files at a time
// for(i=0; i<5; i++){
//     fs.writeFileSync( dirPath+"/Hello"+i+".txt"," a simple Text  file");
// }

//************CRUD(Create, Rename, Delete, Update, Read) operations with Files******************************* *

// const fs = require('fs');
// const path  = require('path');
// const dirPath = path.join(__dirname, 'files');
// const filePath = `${dirPath}/apple.txt`;
//Create file
//fs.writeFileSync(filePath, 'This is a simple text file');

//readFile
// fs.readFile(filePath, 'utf8',(err, item)=>{
//     console.log(item);
// })

//update File
// fs.appendFile(filePath, 'and the file name is apple.txt', (err)=>{
//     if (!err) {
//         console.log("File is updated ");
//     }
// })

//Rename the file
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err)=>{
//  if(!err) console.log("File name is updated")
// })

//Delete the file 
// fs.unlinkSync(`${dirPath}/fruit.txt`);


//***************************Asynchronous Basic in Node js****************************** */
/*
 in Synchronous operation tasks are performrd one at a time

 in Asynchronous operation task do not wait to finish first task
*/
//eg. of Asynchronous operation
// console.log("Hi How are you");

// setTimeout(()=>{
//     console.log("I am Fine")
// }, 2000)

// console.log("Ok ");

//***********************************Handle Asynchronous Data in Node js************* */
// let a=20;
// let waitingData = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(30);
//     }, 2000)
// })

// waitingData.then((b)=>{
//     b = data;
//     console.log(a +b);
// })


//*********************************How Node js Works********************************************** */
// Call Stack -> Node API -> CallBack Queue 
// normal Node functions go call stack and directly execute but other functions which is not core of the node js like c++ , c ie SetTimeout
// goes call Stack to Node API and Then Callback Queue
// As like C++ , C there is main function in Node js in CallStack ie.
//eg.every non node js function goes inside the Node ApI

//  console.log("Hi How are you");

// setTimeout(()=>{
//     console.log("I am Fine")
// }, 2000)

// setTimeout(()=>{
//     console.log("I am Fine")
// },0)

// console.log("Ok ");
//output will be
// Hi How are you
// Ok       
// I am Fine
// I am Fine
//Note. Until the main function not complet callback Queue not come into call stack


 


