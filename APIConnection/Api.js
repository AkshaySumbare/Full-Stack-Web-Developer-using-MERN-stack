//***********************API With MongoDB*************************** */
// 4 important types of API - GET ,PUT, POST, Delete API

// POST Method :- Whenever we want to save some new database through API that time we used POST Method

// GET Method :- Whenever we want to read Data through database the we used GET method

// PUT :- For Update datab

// Delete :- Delete Operations

//**************GET API**************** */
// const express = require("express");
// const dbConnection = require("./mongods");
// const app = express();

// app.get("/", async (req, resp) => {
//    let data =  await dbConnection();
//    data = await data.find().toArray();
//    console.log(data);
//   resp.send(data); //data now shows in browser localhost//50000 and now see on postman
// });

// app.listen(5000);

//**********POST API************ */

//To send data from Postman to Nodejs go--> Postman-> Body -> raw ->then JSON
// const express = require("express");
// const dbConnection = require("./mongo");
// const app = express();

// app.use(express.json()); //for to gaet data fron postman to Nodejs

// app.get("/", async (req, resp) => {
//   let data = await dbConnection();
//   data = await data.find().toArray();
//   console.log(data);
//   resp.send(data); //data now shows in browser localhost//50000 and now see on postman
// });
// app.post("/", async (req, resp) => {
//    console.log(req.body)
//   resp.send( req.body );
// });

// app.listen(5000);

// //**************************************Send Data to MongoDb from Postman********************************** */
// const dbConnection = require("./mongods");
// const express = require("express");
// const app = express();

// app.use(express.json()); //for to gaet data from postman to Nodejs before 4.6 express we used bodyparser after that 4.6 express we used express.json for request to body get

// app.get("/", async (req, resp) => {
//   let data = await dbConnection();
//   data = await data.find().toArray();
//   // console.log(data);
//   resp.send(data); //data now shows in browser localhost//50000 and now see on postman
// });

// app.post("/", async (req, resp) => {
//   let data = await dbConnection();
//   let result = await data.insertOne(req.body);
//   resp.send(result);
//   // console.log(req.body);
//   // resp.send(req.body)
// });

// app.listen(5000);

//**********************************PUT Api************************************************** */

// const dbConnection = require("./mongods");
// const express = require("express");
// const app = express();

// app.use(express.json());

// app.get("/", async (req, resp) => {
//   let data = await dbConnection();
//   data = await data.find().toArray();
//   // console.log(data);
//   resp.send(data); //data now shows in browser localhost//50000 and now see on postman
// });

// app.post("/", async (req, resp) => {
//   let data = await dbConnection();
//   let result = await data.insertOne(req.body);
//   resp.send(result);
//   // console.log(req.body);
//   // resp.send(req.body)
// });

// //console.log(req.body);
// app.put("/:name", async (req, resp) => {
//   //name usd to change name itselt in database
//   let data = await dbConnection();
//   let result = await data.updateOne(
//     //  {name: "Honda"}, //for static
//     //for Dynamic
//     //  {name: req.body.name},    //we cant change the name of database so to change this we need to use
//     // param to change name itself need to write
//     { name: req.params.name },
//     // { $set:{price:125000}} //in case of sytatic
//     //for dynamic by using postman
//     { $set: req.body }
//   );
//   resp.send(result);
// });

// app.listen(5000);

//****************************Delete API***************** */

// const dbConnection = require("./mongods");
// const mongodb = require("mongodb");
// const express = require("express");
// const app = express();

// app.use(express.json());

// app.get("/", async (req, resp) => {
//   let data = await dbConnection();
//   data = await data.find().toArray();

//   resp.send(data);
// });

// app.post("/", async (req, resp) => {
//   let data = await dbConnection();
//   let result = await data.insertOne(req.body);
//   resp.send(result);
// });

// app.put("/:name", async (req, resp) => {
//   let data = await dbConnection();
//   let result = await data.updateOne(
//     { name: req.params.name },
//     { $set: req.body }
//   );
//   resp.send(result);
// });

// app.delete("/:id", async (req, resp) => {
//   console.log(req.params.id);
//   const data = await dbConnection();
//   const result = await data.deleteOne({
//     _id: new mongodb.ObjectId(req.params.id),
//   });
//   resp.send(result);
// });

// app.listen(5000);
