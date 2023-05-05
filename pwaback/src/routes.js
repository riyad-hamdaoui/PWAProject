const Create_User = require('./Connexion/user');
const Connexion_User = require('./Connexion/session');
const AddBonPlan = require('./BonPlan/AddBonPlan');
const AllBonPlan = require('./BonPlan/AllBonPlan');
const MesBonPlan = require('./BonPlan/MesBonPlan');
const subscriptionHandler = require('./subscriptionHandler')
const express = require('express');
const router = express.Router();

router.use('/creation', Create_User);
router.use('/connexion', Connexion_User);
router.use('/AddBonPlan', AddBonPlan);
router.use('/MesBonPlan', MesBonPlan);
router.use('/AllBonPlan', AllBonPlan);
router.post("/subscription", subscriptionHandler.handlePushNotificationSubscription);
router.post("/likepost", subscriptionHandler.sendPushNotification);
module.exports = router;