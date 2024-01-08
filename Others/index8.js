//************************************OS  *********************** */

//const os = require('os');
// console.log(os.arch());
// console.log(os.freemem()/(1024*1024*1024));
// console.log(os.totalmem()/(1024*1024*1024));
//console.log(os.hostname());
//console.log(os.platform());
//console.log(os.userInfo());

//******************Event And Event Emitter in Nodejs******************8 */
//Only through API we can create Buttons in Nodejs

// const express = require("express");
// const EventEmitter = require("events");
// const app = express();
// const event = new EventEmitter();

// let count = 0;

// event.on("countAPI", () => {
//   count++;
//   console.log("event called", count);
// });

// app.get("/", (req, resp) => {
//   resp.send("Api called");
//   event.emit("countAPI");
// });

// app.get("/search", (req, resp) => {
//   resp.send("search called");
//   event.emit("countAPI");
// });

// app.get("/update", (req, resp) => {
//   resp.send("update called");
//   event.emit("countAPI");
// });

// app.listen(5000);



//*****************************REPL******************************* */
// Read-Eval-Print-Loop
// command line tool of Nodejs to run Nodejs and js code 
