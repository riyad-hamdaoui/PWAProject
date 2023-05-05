const User = require('./users');
const crypto = require('crypto')
var nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

function checkpassword(password) {
    if (password.length < 8)
        return false;
    if (password.match(/[A-Za-z0-9]/g).length != password.length)
        return false;
    return true
}

module.exports = async (request, response) => {
  response.header("Access-Control-Allow-Origin: *");
  const {email, password} = request.body;
  if (!email || !password) {
    return response
      .status(400)
      .json({message: "email and password must be provided"});
  }
  if (!checkpassword(password)) {
    response.status(400).json({error : "the password does not correspond to the standards"});
    return ;
  }
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(email))
    return response.status(401).json({message: 'bad email'});
  const user = await User.create(email, crypto.createHash("sha256")
  .update(password)
  .digest("hex"));
  if (!user) {
    return response.status(401).json({message: "User already exists"});
  }
    const token = jwt.sign(
      { userId: user.id },
      "TOKEN_SECRET",
      { expiresIn: "1h" })
  return response.status(201).json({token: token});
};
