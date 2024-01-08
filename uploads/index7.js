//**********************Uploading files in Nodejs ********* */
// need to install pacjkage -> npm i multer

// const express = require("express");
// const multer = require("multer");
// const app = express();

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "uploads");
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname);
//     },
//   }),
// }).single("user_file");
// app.post("/upload", upload, (req, resp) => {
//   resp.send("File uploaded");
// });

// app.listen(5000);

// const express = require("express");
// const multer = require("multer");
// const app = express();

// const upload = multer({
//   dest: "uploads",
// });

// app.post(
//   "/upload",
//   upload.single("file"),
//   (req, res) =>{
//     res.json({
//       message:"File Uploaded Successfully"
//     });
//   }

// );

// const port = 5000;
// app.listen(port, ()=>{
//   console.log(`Server is listen on port ${port}`);
// });
