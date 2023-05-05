const User = require('./users');
const crypto = require('crypto')
const jwt = require('jsonwebtoken');

module.exports = async (request, response) => {
  try {
    const {email, password} = request.body;
    console.log(email, password);
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email))
      return response.status(401).json({message: 'bad email'});
    const user = await User.find(email);
    console.log(crypto.createHash('sha256').update(password).digest('hex'));
    if (!user || (user.password != crypto.createHash('sha256').update(password).digest('hex'))) {
      return response.status(401).json({message: 'bad password'});
    }
    const token = jwt.sign(
      { userId: user.id }, 'TOKEN_SECRET', { expiresIn: '1h' })
    response.status(201).json({token: token});
  } catch (error) {
    console.error(
      `POST session ({ email: ${request.body.email} }) >> ${error.stack})`
    );
    response.status(400).json({message: 'bad request'});
  }
};
