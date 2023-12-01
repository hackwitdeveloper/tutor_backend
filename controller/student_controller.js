
const StudentService = require('../service/student_service');


exports.studentRegister = async (req,res,next) =>{
    try {
        const { student_id,fname,lname,gender,dob,grade,email,phone,subject,tution_slot,gname,gphone,address,state,postcode,password } = req.body;
        const student = await StudentService.checkuser(email);
        if(student){
            return res.status(401).json({message:"Email is already registered"});
        }
        
        const successRes = await StudentService.studentRegister(fname,lname,gender,dob,grade,email,phone,subject,tution_slot,gname,gphone,address,state,postcode,password);
        console.log(successRes); 
        res.status(200).json({status:true,success:"Students Registered Successfully",successRes});
        
    } catch (error) {
        throw error;
    }
}

exports.studentLogin = async (req,res,next)=>{
    try {
        const { email,password } = req.body;
        const student = await StudentService.studentLogin(email);
        if(!student){
           return res.status(401).json({message:"User not found"});
        }
        const isMatch = await student.comparePassword2(password);
        if(!isMatch){
           return res.status(401).json({message:"Invalid Password"});
        }
        const tokenData = {
            fname:student.fname,
            lname:student.lname,
            gender:student.gender,
            dob:student.dob,
            gname:student.gname,
            email:student.email,
            phone:student.phone,
            password:student.password,
            postcode:student.postcode,
            state:student.state,
            address:student.address,
            gphone:student.gphone,
            grade:student.grade,
            subject:student.subject,
            tution_slot:student.tution_slot,
        }
          
        // const token = jwt.sign({email:email,role:'Student'},'Hackwit',{expiresIn:'1h'});
        res.status(200).json({tokenData});
    } catch (error) {
        throw error
    }
}

exports.studentsUpdate = async (req,res,next)=>{
    try {
        const {student_id,fname,laname,gender,dob,grade,email,phone,subject,tution_slot,gname,gphone,address,state,postcode,password } = req.body;
        const updateData = await StudentService.studentUpdate(student_id,fname,laname,gender,dob,grade,email,phone,subject,tution_slot,gname,gphone,address,state,postcode,password);
        res.status(200).json(updateData);   
    } catch (error) {
        throw error
    }
}

exports.studentDelete = async (req,res,next)=> {
    try {
        const { student_id:student_id } = req.query;
        const Students = await StudentService.studentDelete(student_id);
        res.status(200).json({status:true,message:"Student Account is Deleted..",Students});
    } catch (error) {
        throw error
    }
}
exports.studentGet = async (req,res,next)=> {
    try {
        const { student_id:student_id } = req.query;
        const getData = await StudentService.getStudent(student_id);
        res.status(200).json(getData);
    } catch (error) {
        throw error
    }
}

exports.get = async (req,res,next) => {
    try {
        const getData = await StudentService.student()
        res.status(200).json(getData)
    } catch (error) {
        next (error)
    }
}