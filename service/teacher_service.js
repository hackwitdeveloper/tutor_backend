const TeacherModel = require('../model/teacher_model');
const IdcodeServices = require('./idcode_service');


class TeacherService {
    static async teacherregister(fname,laname,gender,email,phone,address,state,postcode,password,subject,Experience,qualification,bio,verification){
        try {
            var tutor_id = await IdcodeServices.generateCode("teacher");
            const createUser = new TeacherModel({tutor_id,fname,laname,gender,email,phone,address,state,postcode,password,subject,Experience,qualification,bio,verification});
            return await createUser.save();
        } catch (error) {
            throw error;
        }
    }

    static async teacherLogin(email){
        try {
            return await TeacherModel.findOne({email})
        } catch (error) {
            throw error
        }
    }

    static async teacherUpdate(tutor_id,fname,laname,gender,email,phone,address,state,postcode,password,subject,Experience,qualification,bio,verification){
        try {
            var query = {tutor_id:tutor_id};
            var values = { $set: {fname:fname,laname:laname,gender:gender,email:email,phone:phone,address:address,state:state,postcode:postcode,password:password,subject:subject,Experience:Experience,qualification:qualification,bio:bio,verification:verification}};
            return await TeacherModel.updateOne(query,values);
        } catch (error) {
            throw error
        }
    }

    static async deleteTeacher(tutor_id){
        try {
            var query = {tutor_id:tutor_id};
            return await TeacherModel.findOneAndDelete(query);
        } catch (error) {
           throw error 
        }
    }

    static async getTeacher(tutor_id){
        try {
            var query = { tutor_id:tutor_id};
            return await TeacherModel.find(query);
        } catch (error) {
           throw error 
        }
    }

    static async Teacher(){
        try {
            return await TeacherModel.find()
        } catch (error) {
            throw error
        }
    }
}

module.exports = TeacherService;