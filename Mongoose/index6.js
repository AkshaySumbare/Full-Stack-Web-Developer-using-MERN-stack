// const express = require("express");
// require("./config");
// const Products = require("./product");

// const app = express();
// app.use(express.json());

// app.post("/create", async (req, resp) => {
//   let data = new Products(req.body);
//   let result = await data.save();
//   console.log(result);
//   resp.send(result);
// });

// app.get("/list", async (req, resp) => {
//   let data = await Products.find();
//   resp.send(data);
// });

// app.delete("/delete/:_id", async (req, resp) => {
//   console.log(req.params);
//   let data = await Products.deleteOne(req.params);
//   resp.send(data);
// });

// app.put("/update/:_id", async (req, resp) => {
//   console.log(req.params);
//   let data = await Products.updateOne(
//     req.params, //condition
//     {
//       $set: req.body, //$set updated data
//     }
//   );
//   resp.send(data);
// });

// app.listen(5000);

//****************************Search API in Node js with MongoDB********************* */

// const express = require("express");
// require("./config");
// const Products = require("./product");
// const app = express();

// app.use(express.json());

// app.get("/search/:key", async (req, resp) => {
//   console.log(req.params.key);
//   let data = await Products.find({
//     $or: [
//       { name: { $regex: req.params.key } }, //serch only in name write any key ie. A ,A12 etc in postman to find
//       { brand: { $regex: req.params.key } },
//     ],
//   });
//   resp.send(data);
// });

// app.listen(5000);


//*********** File Upload in Nodejs ******** */
//see in respective Folder