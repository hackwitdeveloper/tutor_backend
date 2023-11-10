
const TeacherService = require("../service/teacher_service");
const jwt = require('jsonwebtoken');


exports.teacherregister = async (req,res,next) => {
    try {
        const { tutor_id,fname,laname,gender,email,phone,address,state,postcode,password,subject,Experience,qualification,bio,verification } = req.body;
        const successRes = await TeacherService.teacherregister(fname,laname,gender,email,phone,address,state,postcode,password,subject,Experience,qualification,bio,verification);
        console.log(successRes);
    
        res.status(200).json({status: true,success:"Teacher Registered Successfully",successRes});
    } catch (error) {
        throw error
    }
   
}

exports.teacherLogin = async (req,res,next)=>{
    try {
        const { email,password } = req.body;
        const teacher = await TeacherService.teacherLogin(email,password);
        if(!teacher) {
            res.status(401).json({message:"User not found."});
        }
        const isMatch = await teacher.comparePassword(password);
        if(!isMatch) {
            res.status(401).json({message:"Invaild Password"})
        }
        const token = jwt.sign({email:email,role:'Teacher'},'Hackwit', {expiresIn: '1h'});
        res.status(200).json({token});
    } catch (error) {
        
    }
}

exports.teacherUpdate = async (req,res,next) =>{
    try {
        const {tutor_id,fname,laname,gender,email,phone,address,state,postcode,password,subject,Experience,qualification,bio,verification } = req.body;
        const updateData = await TeacherService.teacherUpdate(tutor_id,fname,laname,gender,email,phone,address,state,postcode,password,subject,Experience,qualification,bio,verification);
        res.status(200).json(updateData);
        
    } catch (error) {
        throw error
    }
   
}

exports.teacherDelete = async (req,res,next)=> {
    try {
       const {tutor_id:tutor_id } = req.query;
       const Teacher = await TeacherService.deleteTeacher(tutor_id);
       res.status(200).json({status:true,message:"Teacher Account is Deleted..",Teacher}); 
    } catch (error) {
        throw error
    }
}
exports.teacherGet = async (req,res,next)=>{
    try {
       const {tutor_id: tutor_id } = req.body;
       const getData = await TeacherService.getTeacher(tutor_id);
       res.status(200).json(getData); 
    } catch (error) {
        throw error
    }
}

exports.get = async (req,res,next) => {
    try {
        const getData = await TeacherService.Teacher()
        res.status(200).json(getData)
    } catch (error) {
        next (error)
    }
}