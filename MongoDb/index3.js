//*****************************MongoDB *************************** */
//Data Base it is Non-Sql DataBase
//mongoDb compass is the name of GUI environment of MongoDb
//data stored in the form of collections
//collection don't have row and columns
// Data stored in the form of object.
//*********************************MongoDb compass  Operations in terminal of compass ************************  */
// show dbs
// admin   40.00 KiB
// config  60.00 KiB
// local   72.00 KiB
//***Creating new database********* */
// use youtube
// switched to db youtube
// db.createCollection('videos')
// { ok: 1 }
// show dbs
// admin     40.00 KiB
// config   108.00 KiB
// local     72.00 KiB
// youtube    8.00 KiB
// show collections
// videos
// db.createCollection('Playlist')
// { ok: 1 }
//*****Delete Database******* */
// db.videos.drop()
// true
// collections
// ReferenceError: collections is not defined
// show collections
// Playlist
// show dbs
// admin     40.00 KiB
// config   108.00 KiB
// local     72.00 KiB
// youtube    8.00 KiB
// db.dropDatabase()
// { ok: 1, dropped: 'youtube' }
// show databases
// admin    40.00 KiB
// config  108.00 KiB
// local    72.00 KiB
// youtube

//*******************************CRUD Operations in MangoDB************ */
//****1) insert operation******** */
/** //using insert documents
* Paste one or more documents here
// */
// {
//     "_id": {
//       "$oid": "6597dfece7d882788a6845f3"
//     },
//     "name": "Realme C2",
//     "Brand": "Vivo",
//     "Price": 200,
//     "Category":"Mobile"
//   }

//****2) using Terminal******* */
//local    72.00 KiB
// use E-com
// switched to db E-com
// db.products.insertOne({name: 'Mi A2', brand:'xoimi', price:15000, category:'Mobile'})
// {
//   acknowledged: true,
//   insertedId: ObjectId('6597dec951c2d3a0e05239cd')
// }

// db.products.insertOne({name: 'Mi A3', brand:'xoimi', price:1500, category:'Mobile'})
// {
//   acknowledged: true,
//   insertedId: ObjectId('6597df9a51c2d3a0e05239ce')
// }

// db.products.insertOne({name: 'iphone 15pro', brand:'Apple', price:150000, category:'Mobile'})
// {
//   acknowledged: true,
//   insertedId: ObjectId('6597dfd251c2d3a0e05239cf')
// }
// E-com

//******************Update************ */
//using command
//db.products.updateOne({name:"Mi A3"},{$set:{price:1510}})

//*********************Delete************** */
//db.products.deleteOne({brand:"Apple"})

//***************************Connect Nodejs With MongoDb*************** */

// const {MongoClient} = require('mongodb');
// const url ='mongodb://localhost:27017';
// const database = 'E-com';
// const client = new MongoClient(url);

//  async function getData()
//  {
//     let result= await client.connect(); //for awit our function should be async
//     let db = result.db(database);
//     let collection = db.collection('products');
//     let response = await collection.find({}).toArray();
//     console.log(response);

// }
// getData();

//*******************************************Read Data from MongoDB**************************************** */

//  const dbConnection = require('./mongo')

//***1) way no 1 ************ */

// dbConnection().then((resp) => {
//   resp
//     .find()
//     .toArray()
//     .then((data) => {
//       console.warn(data);
//     });

//   //for perticular
//   resp
//     .find({ name: "BMW 7 Series" })
//     .toArray()
//     .then((data) => {
//       console.warn(data);
//     }); //to arrow also create promise
// });


//*****2) way no 2******** */
// const main = async () =>{
//     let data = await dbConnection();
//     data = await data.find().toArray();
//     console.warn(data);
// }
// main();



//*******************************************Insert Data from MongoDB********************************** */
//see in insert.js