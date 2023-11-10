const router = require('express').Router();
const { route } = require('../app');
const idcodeController = require('../controller/idcode_controller');
const parentController = require('../controller/parent_controller');
const studentController = require('../controller/student_controller');
const teacherController = require('../controller/teacher_controller');
const categoriesController = require('../controller/categories_controller');
const feadbackController = require('../controller/feadback_controller');
const AdminController = require('../controller/admin_controller');

router.post('/idcode',idcodeController.idcode);

router.post('/admin', AdminController.register);
router.post('/adminlogin', AdminController.login);
router.get('/getadmin',AdminController.get)
router.get('/getadmin1',AdminController.getAdmin);
router.get('/getemail',AdminController.getEmail);
router.put('/updateadmin', AdminController.Update);
router.delete('/deleteadmin',AdminController.delete);

router.post('/parentregister',parentController.register);
router.post('/parentLogin',parentController.parentLogin);
router.put('/parentUpdate',parentController.parentUpdate);
router.get('/parentGetData',parentController.parentGet);
router.get('/parentget',parentController.get);
router.delete('/parentDelete',parentController.parentDelete);


router.post('/studentregister',studentController.studentRegister);
router.post('/studentLogin',studentController.studentLogin);
router.put('/studentUpdate',studentController.studentsUpdate);
router.get('/studentGetData',studentController.studentGet);
router.get('/studentget',studentController.get);
router.delete('/studentDelete',studentController.studentDelete);


router.post('/teacherregister',teacherController.teacherregister);
router.post('/teacherlogin',teacherController.teacherLogin);
router.put('/teacherUpdate',teacherController.teacherUpdate);
router.get('/teacherGetData',teacherController.teacherGet);
router.get('/teacherget', teacherController.get);
router.delete('/teacherDelete',teacherController.teacherDelete);

router.post('/categories',categoriesController.categories);
router.get('/categoriesGet',categoriesController.get);
router.delete('/categoriesDelete',categoriesController.delete);

router.post('/feadback',feadbackController.feadback);


module.exports = router;