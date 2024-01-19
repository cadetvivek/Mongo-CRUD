var express = require('express');
var router = express.Router();
const userModel = require("./users")
/* GET home page. */
router.get('/', function(req, res) {
  res.render("index");
});
//creation
// router.get("/create",async function(req, res) { // this is a asyncronous function

//  const createduser = await   userModel.create({  //we are using here await becasue we want to run first this function 
//                          //also if we use await so async also necessary
//       username: "harsh",
//       age: 25,
//       name: "harsh"
//     });
//     res.send(createdusers)
// });


//delete
router.get('/delete',async function(req, res) {
  let deleteduser =await userModel.findOneAndDelete({
    username:"harsh"
  })
  res.send(deleteduser)
});

module.exports = router;
 


