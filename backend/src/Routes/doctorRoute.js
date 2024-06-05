const express = require('express');
const router = express.Router();
const upload = require('../Middlewares/upload'); // Middleware Multer 

const {
    filterGender,
    getAllDoctors,
    getDoctorById,
    createDoctor,
    updateDoctorById,
    deleteDoctorById,
    findDoctorsBySpeciality,
    changeStatus,profile } = require ('../Controllers/doctorController')
    router.get('/:id',getDoctorById);
    router.get('/speciality/:speciality', findDoctorsBySpeciality)
    ;
    router.post('/', createDoctor);
    
const {authenticateUser,authorize} = require('../Middlewares/adminDocMiddleware');

  
    router.get('/filter', filterGender);
    router.use(authenticateUser)

    router.patch('/:id', authorize(['Admin']),changeStatus);
    // router.get('/', authorize(['Admin']),getAllDoctors);
    router.get('/',getAllDoctors);
    router.get('/:id',getDoctorById);
    router.get('/profile',profile);
   
    router.put('/:id',authorize(['Admin','Doctor']),updateDoctorById);
    router.delete('/:id', authorize(['Admin']),deleteDoctorById);
    

    module.exports = router;