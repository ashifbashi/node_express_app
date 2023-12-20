const express = require("express");
const { signUp, login } = require("../Controller/index");

const router = express.Router();



router.post("/signupdb", signUp);

router.post("/login", login);


router.get("/user/:id", (req, res) => {
  let value = req.params;
  console.log(value)
  res.json({ name: "Ashif", age: 22 });
});


router.post("/signup", (req, res) => {
  
  const data = {
    username: "ashifbashi@gmail.com",
    password: "ashif4697",
  };
console.log()
  if(data.username === req.body.username && data.password === req.body.password){
    res.json({ message: "user is varified"});
  } else{
    res.json({ message: "user is invalied"});
  }
     
});


router.post("/register", (req, res) => {
res.json({message:"registered"})
})
 

router.get("/movies", (req, res) => {
  const data = [
    {gener:"action", movieName: "John Wick", year: "2022" },
    {gener:"action", movieName: "darkknigt", year: "2021" },
    {gener:"horror", movieName: "The NUN", year: "2019" },
  ]
  res.json(data);
});


module.exports = router;