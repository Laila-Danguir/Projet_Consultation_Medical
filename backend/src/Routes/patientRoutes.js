const express = require('express');
const { loginPatient } = require('../Controllers/authController');
const router = express.Router();

const { getAllPatient, getPatientById, createPatient, updatePatient, deletePatient, patientDoc } = require('../controllers/patientController')
const { getSum } = require('../controllers/sumController')
const { authenticateUser, authorize } = require('../middlewares/adminDocMiddleware');

router.post('/login', loginPatient)
router.post('/', createPatient)

router.get('/sum', getSum);
router.use(authenticateUser);

router.get('/:id', getPatientById);

router.get('/', authorize(['Admin']),getAllPatient);

router.get('/:doctorId/:patientId', authorize(['Admin']), patientDoc);

router.put('/:id', authorize(['Admin','patient']), updatePatient);
router.delete('/:id', authorize(['Admin']), deletePatient)



module.exports = router