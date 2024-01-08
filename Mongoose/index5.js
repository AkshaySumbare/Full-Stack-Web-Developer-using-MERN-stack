//**************************************Mongoose********************************* */
//mongoose:- npm package that connect Nodejs to  mongoDb
/*  MongoDB is a document-oriented NoSQL database, while Mongoose is an Object Data Modeling (ODM) library for Node. js that provides a higher-level abstraction layer on top of MongoDB, allowing developers to define data models using a schema-based approach. we cant used Model and Schemas in MongoDb used in Mongoose  */
//eg. if we dont want to add some extra data so in this scenerio we have used mschemas  to stop such data in mongoose but cantbdo in mongodb used to use validation and stop extra field .

//Difference between Schemas and Model
//Schemas -> all Fields we called as Schemas and all this Field in the data base are defined under the Schemas
//Mode: -> used those Schemas to Connect Nodejs And MongoDb

// const mongoose = require("mongoose");

// const main = async () => {
//   await mongoose.connect("mongodb://localhost:27017/E-com");

//   const ProductSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     brand: String,

//   });
//   const ProductModel = mongoose.model("products", ProductSchema);
//   let data = new ProductModel({ name: "A122", price: 15000, brand:"Xiomai", category: "Mobile" }); //ategory will not display becz we havent written it on ProductSchema so it has to be Stop ny Mongoose
//   let result = await data.save();
//   console.log(result);
// };

// main();

//*********************************CRUD Operations with mongoose************************* */

// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/E-com");

// //******************Save in DB************ */
// const ProductSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
//   brand: String,
// });

// const saveInDB = async () => {
//   const Product = mongoose.model("products", ProductSchema);
//   let data = new Product({
//     name: "A122",
//     price: 15000,
//     brand: "Xiomai",
//     category: "Mobile",
//   });
//   let result = await data.save();
//   console.log(result);
// };

// saveInDB()

//***************UPdate in DB************************* */
// const updateInDB = async () => {
//   const Product = mongoose.model("products", ProductSchema);
//   let data = await Product.updateOne(
//     { name: "Mi A2 pro" },
//     {
//       $set: { price: 7000, name: "Mi A" },
//     }
//   );
//   console.log(data);
// };

// updateInDB();

//***************************Delete in DB***************** */

// const deleteInDB = async () => {
//   const Product = mongoose.model("product", ProductSchema);
//   let data = await Product.deleteOne({ name: "Mi A" });
//   console.log(data);
// };
// deleteInDB();

//******************Find in DB**************** */

// const findInDB = async () => {
//   const Product = mongoose.model("product", ProductSchema);
//   let data = await Product.find({name:"Honda"});
//   console.log(data);
// };
// findInDB();

//******************Making POST API in Nodejs with the help of Mongoose******************** */
//see in index6.js ,config.js and product.js for post ,get delete , put methods 