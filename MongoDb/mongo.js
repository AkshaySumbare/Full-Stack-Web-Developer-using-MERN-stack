// const { MongoClient } = require("mongodb");
// const url = "mongodb://localhost:27017";
// const database = "E-com";
// const client = new MongoClient(url);

// //promises used to handle the pending result becz. as we  know  javaScript is a Async llanguage doesn't wait the pre line execution to handle the pending operation promises use

// async function dbConnection() {
//   let result = await client.connect(); //for awit our function should be async
//   let db = result.db(database);
//   return db.collection("products");

// }
// module.exports = dbConnection;