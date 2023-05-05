const subscriptions = {};
var crypto = require("crypto");
const webpush = require("web-push");
const jwt = require('jsonwebtoken');
const db = require('./db');

const vapidKeys = {
  privateKey: "bdSiNzUhUP6piAxLH-tW88zfBlWWveIx0dAsDO66aVU",
  publicKey: "BIN2Jc5Vmkmy-S3AUrcMlpKxJpLeVRAfu9WBqUbJ70SJOCWGCGXKY-Xzyh7HDr6KbRDGYHjqZ06OcS3BjD7uAm8"
};

webpush.setVapidDetails("mailto:example@yourdomain.org", vapidKeys.publicKey, vapidKeys.privateKey);

function createHash(input) {
  const md5sum = crypto.createHash("md5");
  md5sum.update(Buffer.from(input));
  return md5sum.digest("hex");
}

async function handlePushNotificationSubscription(req, res) {
  let subscriptionId = ''
  const {subscriptionRequest, token} = req.body;
  if (!subscriptionRequest|| !token)
    return res.status(404).json({msg : "il manque certaines informations"});
  const decodedToken = jwt.verify(token, "TOKEN_SECRET");
  const user = decodedToken.userId;
  const {rows} = await db.query('SELECT * FROM usersIT WHERE id=\'' + user + '\'LIMIT 1;');
  console.log(rows)
  if (rows[0].susbscriptionid === '' || rows[0].susbscriptionid === null )
    subscriptionId = JSON.stringify(subscriptionRequest) + ';'
  else 
    subscriptionId += JSON.stringify(subscriptionRequest) + ';'
  await db.query('UPDATE usersIT set susbscriptionid=\'' + JSON.stringify(subscriptionRequest) +'\' WHERE id=\'' + user + '\';');
  const susbscriptionId = createHash(JSON.stringify(subscriptionRequest));
  subscriptions[susbscriptionId] = subscriptionRequest;
  res.status(201).json({ id: susbscriptionId });
}

async function sendPushNotification(req, res) {
  const { bonplan, token} = req.body
  const decodedToken = jwt.verify(token, "TOKEN_SECRET");
  const user = decodedToken.userId;
  const Bonplan = await db.query('SELECT * FROM msgsIT WHERE id=\'' + bonplan + '\'LIMIT 1;');
  console.log(Bonplan.rows[0].likes)
  if (user !== Bonplan.rows[0].users) {
    if (Bonplan.rows[0].likes === null || Bonplan.rows[0].likes.split(';').indexOf(user) < -1) {
      let likes = user;
      if (Bonplan.rows[0].likes !== null) {
        likes = Bonplan.rows[0].likes + ";" + user
      }
      const User = await db.query('SELECT * FROM usersIT WHERE id=\'' + Bonplan.rows[0].users + '\'LIMIT 1;');
      await db.query('UPDATE msgsIT SET likes=$1 WHERE id=$2;',[likes,bonplan]);
      const {rows} = await db.query('SELECT * FROM usersIT WHERE id=\'' + user + '\'LIMIT 1;');
      if (User.rows[0].susbscriptionid)
        User.rows[0].susbscriptionid.split(";").map((value) => {
        if (value !== '') {
          webpush
            .sendNotification(
              JSON.parse(value),
              JSON.stringify({
                title: "Like Post",
                text: rows[0].email + " a aimé votre post",
                tag: "like-post",
                url: "/new-product-jason-leung-HM6TMmevbZQ-unsplash.html"
              })
            )
            .catch(err => {
              console.log(err);
            })
        }}
      )
  }
  }
  res.status(202).json({});
}

module.exports = { handlePushNotificationSubscription, sendPushNotification };