// const { response } = require("express");
const PETS = require("../Models/petSchema");

// -------------get all pet data--------------------
const getAllDogPetsData = (req, res) => {
  PETS.find()
    .then((response) => {
      res.status(200).json(response);
      console.log(response);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
// --------------------carousal data----------------
// const getAllDogPetsDatacarousal = (req, res) => {
//   PETS.find()
//     .then((response) => {
//       res.status(200).json(response);
//       console.log(response);
//     })
//     .catch((Error) => {
//       res.status(500).json(Error);
//     });
// };


// ------------------------------------------------
// -------------get single pet data-----getAllDogPetsDatacarousal---------

const getSinglePetData = async (req, res) => {
  try {
    const sinlePetResult = await PETS.findOne({ _id: req.query.petId });
    res.status(200).json(sinlePetResult);
      //  console.log(sinlePetResult,'-----------sinlePetResult---------');
  } catch (error) {
    console.log(error);
  }

  // PETS.findOne({_id:req.query.petId}).then((response)=>{
  //     res.status(200).json(response)
  //     console.log(response,'---------PETS-00000000----------');
  // })
  // .catch((error)=>{
  // console.log(error);
  // })
};



const getMyBookingData = async (req, res) => {
    try {

      const myBooking= await PETS.find({petAdoptedBy:req.userId});
    //   const myBooking = await PETS.aggregate([
    //     {
    //       $match: {
    //         petAdoptedBy: new Object(req.userId),
    //       },
    //     },
    //   ]);
  
      res.status(200).json(myBooking);
    } catch (error) {
      console.error('Error fetching my booking data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // const getAllDogPetsDatalandingpage = (req, res) => {
  //   PETS.find()
  //     .then((response) => {
  //       res.status(200).json(response);
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       res.status(500).json(err);
  //       console.log(err);
  //     });
  // };
  


module.exports = { getAllDogPetsData, getSinglePetData, getMyBookingData , getAllDogPetsDatalandingpage };
