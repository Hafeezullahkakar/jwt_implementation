var express = require('express');
var router = express.Router();
const UserModel = require('./userModel')
const jwt= require('jsonwebtoken')
//add new user
router.get('/', (req, res)=>{
    res.send("Hello there")
})
router.post('/register', function (req, res, next) {
    UserModel.create(req.body)
        .then((result) => {
            console.log('new user has been Added ', result);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
        .catch((err) => next(err));
});

router.post('/login', async (req, res) => {
    const user = await UserModel.findOne({ email: req.body.email })
    if (user) {
      console.log(user)
      const token = jwt.sign({ id: user._id }, "hafeezsecretKey", {
        expiresIn: 86400 // expires in 24 hours
      })
      res.send({ user, token })
    }
    else {
      res.send("No user found...")
    }
  
  })

  function validateToken(req, res, next) {
    const token = req.headers.token
    // console.log("user token", token)
    const isMatch = jwt.verify(token, "hafeez")
    if (isMatch) {
      next()
    }
    else {
      res.send("You're not authorized...")
    }
  
  }

  router.get('/profile', validateToken, (req, res) => {

    res.send("Welcome")
  
  })
  

module.exports = router;