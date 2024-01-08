// const dbConnection = require("./mongo");

// const insert = async () => {
//   const db = await dbConnection();
//   const result = await db.insertOne({
//     name: "Volvo xc90",
//     brand: "Volvo",
//     Speed: 240,
//     Model: 2023,
//   });
//   // console.log(result);
//   // console.log(result.acknowledged);
//   if (result.acknowledged) {
//     console.log("Data Inserted Successfully");
//   } else {
//     ("Opps Something Wrong");
//   }
// };

// insert();

//****************************for Multiple************** *************** */

// const dbConnection = require("./mongo");

// const insert = async () => {
//   const db = await dbConnection();
//   const result = await db.insertMany([
   
//     {
//       name: "Mercedise Benz ",
//       brand: "Mercidise",
//       Speed: 300,
//       Model: 2022,
//     }, 
//     {
//       name: "Landcruser Prado",
//       brand: "Toyota",
//       Speed: 280,
//       Model: 2023,
//     },
//     {
//       name: "Mahindra Thar",
//       brand: "Mahindra",
//       Speed: 200,
//       Model: 2023,
//     },
//   ]);
//    console.log(result);
//   // console.log(result.acknowledged);
//   if (result.acknowledged) {
//     console.log("Data Inserted Successfully");
//   } else {
//     ("Opps Something Wrong");
//   }
// };

// insert();
