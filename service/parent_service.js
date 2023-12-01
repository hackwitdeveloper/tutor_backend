const ParentModel = require('../model/parent_model');
const IdcodeServices = require('./idcode_service');
const bcrypt = require('bcrypt');

class ParentService {

    static async registerUser(fname,laname,gender,email,phone,address,state,postcode,password,kidname,grade,subject,tution_slot,credits){
        try {
            var parent_id = await IdcodeServices.generateCode("parents");
            const hashedpassword = await bcrypt.hash(password,10);
            const createUser = new ParentModel({parent_id,fname,laname,gender,email,phone,address,state,postcode,password : hashedpassword,kidname,grade,subject,tution_slot,credits}); 
            return await createUser.save();
        } catch (error) {
            throw error;
        }
 }

    static async checkuser(email){
        try{
            return await ParentModel.findOne({email});

            }catch(error){
                throw error;
        }
    }

    static async checkphone(phone){
        try{
            return await ParentModel.findOne({phone});

        }catch(error){
            throw error;
        }
    }

    static async loginParent(email){
        try {
            return await ParentModel.findOne({email})
        } catch (error) {
            throw error;
        }
    }

    static async updateParent(parent_id,fname,laname,gender,email,phone,address,state,postcode,password,kidname,grade,subject,tution_slot,credits){
        try {
           var query = { parent_id: parent_id };
           var values = { $set: {fname: fname, laname: laname,gender:gender,email:email,phone: phone,address: address,state: state,postcode: postcode,password: password,kidname: kidname,grade: grade,subject: subject,tution_slot: tution_slot,credits:credits}};
           return await ParentModel.updateOne(query,values); 
        } catch (error) {
            throw error
        }
    }

    static async deleteParent(parent_id){
        try {
            var query = {parent_id:parent_id};
            return await ParentModel.findOneAndDelete(query);
        } catch (error) {
            throw error
        }
    }

    static async getParent(parent_id){
        try {
            var query = {parent_id:parent_id};
            return await ParentModel.find(query);
        } catch (error) {
            throw error
        }
    }

    static async getSubject(subject){
        try {
            var query = {subject:subject};
            return await ParentModel.find(query);
        } catch (error) {
            throw error
        }
    }

    static async Parent(){
        try {
            return await ParentModel.find()
        } catch (error) {
            throw error
        }
    }

    static async changePassword(email,password){
        try{
            var query = { email: email };
            const salt = await(bcrypt.genSalt(10));
            const hashpass = await bcrypt.hash(password,salt);
            var values = { $set: { password: hashpass} };
            return await ParentModel.updateOne(query,values);
        }catch(error){
            print(error);
        }
    }

    static async resetPassword(phone,password){
        try {
            var query = {phone:phone};
            const salt = await(bcrypt.genSalt(10));
            const hashpass = await bcrypt.hash(password,salt);
            var values = { $set: { password: hashpass} };
            return await ParentModel.updateOne(query,values);
        } catch (error) {
           throw error 
        }
    }

}

module.exports = ParentService;