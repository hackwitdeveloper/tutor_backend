const StudentModel = require('../model/student_model');
const IdcodeServices = require('./idcode_service');

class StudentService{
    static async studentRegister(fname,lname,gender,dob,grade,email,phone,subject,tution_slot,gname,gphone,address,state,postcode,password){
        try {
            var student_id = await IdcodeServices.generateCode("students");
            const createUser = new StudentModel({student_id,fname,lname,gender,dob,grade,email,phone,subject,tution_slot,gname,gphone,address,state,postcode,password});
            return await createUser.save();
        } catch (error) {
            throw error
        }
    }
    
    static async studentLogin(email){
        try {
            return await StudentModel.findOne({email})
        } catch (error) {
            throw error
        }
    }
    static async studentUpdate(student_id,fname,lname,gender,dob,grade,email,phone,subject,tution_slot,gname,gphone,address,state,postcode,password){
        try {
            var query = { student_id:student_id};
            var values = { $set: {fname:fname,lname:lname,gender:gender,dob:dob,grade:grade,email:email,phone:phone,subject:subject,tution_slot:tution_slot,gname:gname,gphone:gphone,address:address,state:state,postcode:postcode,password:password}};
            return await StudentModel.updateOne(query,values);
        } catch (error) {
            throw error
        }
    }

    static async studentDelete(student_id){
        try {
            var query = {student_id:student_id};
            return await StudentModel.findOneAndDelete(query);    
        } catch (error) {
            throw error
        }
    }

    static async getStudent(student_id){
        try {
            var query = { student_id:student_id };
            return await StudentModel.find(query);
        } catch (error) {
            throw error
        }
    }

    static async student(){
        try {
            return await StudentModel.find()
        } catch (error) {
            throw error
        }
    }

    
}
module.exports = StudentService;