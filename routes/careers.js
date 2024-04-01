const express=require('express');
const router=express.Router();

const userController=require('../controllers/career');

router.get('/',userController.connectFrontend);
router.get('/:playerId',userController.connectPlayerInfo);
router.post('/add-player',userController.addPlayer);
router.get('/careers',userController.getPlayer);
router.delete('/delete-expense/:expenseId',userController.deleteExpense);

module.exports=router;