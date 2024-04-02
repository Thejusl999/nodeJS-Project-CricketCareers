const express=require('express');
const router=express.Router();

const playerController=require('../controllers/career');

router.get('/',playerController.connectFrontend);
router.get('/searchPlayer/:playerId',playerController.connectPlayerInfo);
router.post('/add-player',playerController.addPlayer);
router.post('/getPlayerByName',playerController.getPlayerByName);
router.post('/getPlayerById',playerController.getPlayerById);
router.delete('/delete-player/:playerId',playerController.deletePlayer);

module.exports=router;