var express = require('express');
const { getAllDogPetsData , getSinglePetData , getMyBookingData, getAllDogPetsDatalandingpage } = require('../controllers/userController');
const { userAuth } = require('../middlewares/Authorization');
var router = express.Router();

/* GET users listing. */
router.get( '/getAllDogPetsData', userAuth , getAllDogPetsData )
router.get( '/getSinglePetData', userAuth , getSinglePetData )
router.get( '/getMyBookingData', userAuth , getMyBookingData )
// router.get( '/getAllDogPetsDatalandingpage', userAuth , getAllDogPetsDatalandingpage )


// getAllDogPetsDatalandingpage
// router.get( '/getAllDogPetsDatacarousal', userAuth , getAllDogPetsDatacarousal )




module.exports = router;
// 