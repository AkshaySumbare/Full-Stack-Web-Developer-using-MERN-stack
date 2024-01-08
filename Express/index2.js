//**********************************ExpressJs*************************************** */
//command in terminal --> npm i express
// const express = require("express");
// const app = express();
// app.get("", (req, res) => {
//   res.send("Hello This is Home Page");
// });

// app.get("/about", (req, res) => {
//   res.send("Hello This is About Page");
// });

// app.get("/help", (req, res) => {
//     res.send("Hello This is help Page");
//   });

// app.listen(4200);

//Note :- Whenever we add some thing we need to restart server again

//**********************************************Render HTML and JSON ******************************** */

// const express = require("express");
// const app = express();
// app.get("", (req, res) => {

//   res.send(`<h1> Hello This is Home Page <h1/>  ${req.query.name}`); //getting value from query parameter in Nodejs right in browser http://localhost:4200/?name=Akshay and the name will see
// });
// app.listen(4200);

// app.get("/help", (req, res) => {
//   res.send([
//     {
//     name: "Akshay",
//     email: 'sumbareakshay@gmail.com',
//   },
//   {
//     name: "Abhay",
//     email: 'sumbareakshay12@gmail.com',
//   },
//   {
//     name: "Amit",
//     email: 'sumbareaksha34y@gmail.com',
//   },
// ]);
// });

//***********************************************************Make Html Pages********************************* */
//see in Html folder

// const express = require("express");
// const path = require("path");

// const app = express();
// const Htmlpath = path.join(__dirname, "Html");
// //console.log(Htmlpath);
// app.use(express.static(Htmlpath));

// //console.log(__dirname)
// app.listen(4200);
//access by on browser using --> http://localhost:4200/filename

//*******************************Remove extension from URL************************* */
// const express = require('express');
// const path = require('path');
// const app = express();
// const publicPath = path.join(__dirname, "public");
// //console.log(Htmlpath);
// //app.use(express.static(Htmlpath));
//  app.get('', (req, resp)=>{
//     resp.sendFile(`${publicPath}/home.html`)
//  })

//  app.get('/about', (req, resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
//  })

//  app.get('/help', (req, resp)=>{
//     resp.sendFile(`${publicPath}/help.html`)
//  })

//  app.get('*', (req, resp)=>{
//     resp.sendFile(`${publicPath}/404.html`)
//  })
// //console.log(__dirname)
// app.listen(4200);

//*****************************************Templete Engine*************************** */
//********************Use of Ejs********************* */
//ejs is a Templete Engine
//help to create an HTML templete with minimal code.
//use to create dynamic pages
//static pages -> those html pages whose content do not change and remain static is called static pages
//in node js we create dynamic pages rarely

// const express = require('express');
// const path = require('path');
// const app = express();
// const publicPath = path.join(__dirname, "public");

// //****ejs use******
// //npm i ejs@3.0.2 run command in terminal before this
// app.set('view engine', 'ejs');
// app.get('/profile', (req, resp)=>{
//     const user={
//         name: "Akshay",
//         email: "Sumbareakshay@gmail.com",
//         city: 'Ahmadnagar',
//     }
//     resp.render('profile', {user});
//  })

//    //for any templete engine we need views name folder which i have created
//  app.get('', (req, resp)=>{
//     resp.sendFile(`${publicPath}/home.html`)
//  })

//  app.get('/about', (req, resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
//  })

//  app.get('/help', (req, resp)=>{
//     resp.sendFile(`${publicPath}/help.html`)
//  })

//  app.get('*', (req, resp)=>{
//     resp.sendFile(`${publicPath}/404.html`)
//  })
// //console.log(__dirname)
// app.listen(4200);

//**********************************************Dynamic Page************************************************** */
//create loop in ejs

// const express = require('express');
// const path = require('path');
// const app = express();
// const publicPath = path.join(__dirname, "public");

// app.set('view engine', 'ejs');
// app.get('/profile', (req, resp)=>{
//     const user={
//         name: "Akshay",
//         email: "Sumbareakshay@gmail.com",
//         city: 'Ahmadnagar',
//         skills: ['c++', 'JavaScript','Python', 'Nodejs', 'Reactjs']
//     }
//     resp.render('profile', {user});
//  })

//    //for any templete engine we need views name folder which i have created
//  app.get('', (req, resp)=>{
//     resp.sendFile(`${publicPath}/home.html`)
//  })

//  app.get('/about', (req, resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
//  })

//  app.get('/help', (req, resp)=>{
//     resp.sendFile(`${publicPath}/help.html`)
//  })

//  app.get('*', (req, resp)=>{
//     resp.sendFile(`${publicPath}/404.html`)
//  })
// //console.log(__dirname)
// app.listen(4200);

//************************************************Middleware******************************************** */
//Middlewares are the function which we can use with Routs with there helps we access request and  responses and modify/filter them ie. for chnages in resp and req
// Types of Middleware
// Application-level, Router-level, Error-handling, Built-in , Third-party

//*****************application level Middlewere************* */
//apply on all routes in group
// const express = require("express");
// const app = express();

// const reqFilter = (req, resp, next) => {
//   if (!req.query.age) {
//     resp.send("Please provide age");
//   }
//   if (req.query.age < 18) {
//     resp.send("you can not access this page");
//   } else {
//     next(); //if we not write next() still the it working and not go next
//     //http://localhost:4500/?age=19 ->write in browser
//   }
// };
// app.use(reqFilter);

// app.get("/", (req, resp) => {
//   resp.send("Welcome to Home Page");
// });
// app.get("/users", (req, resp) => {
//   resp.send("Welcome to Users Page");
// });

// app.listen(4500);

//****************************************Routes Level Middleware******************************************/
//Middlewers which apply on single routes as well as group of routing ie.some numbers eg.20 out of 50
//specific routes in the routes as well as all routes
//app level middleware  apply globally while routes level on according to conditions 

// const express = require("express");
// const reqFilter = require('./middleware');
// const app = express();
// //for multiple routes we following method
// const route = express.Router();
// //app.use(reqFilter); bexz. we want for specific route

// route.use(reqFilter);
// app.get("/", (req, resp) => {
//     resp.send("Welcome to Home Page");
//   });
//   app.get("/users", (req, resp) => {
//     resp.send("Welcome to Users Page");
//   });
  
//   route.get("/about",reqFilter,(req, resp) => { //requireFilter only works with about page
//     resp.send("Welcome to About Page");
//   });
  
//   route.get("/contact",reqFilter,(req, resp) => { //requireFilter only works with about page
//     resp.send("Welcome to Contact Page");
//   });
  
//   app.use('/',route);
//   app.listen(4500);
