const ParentModel = require('../model/parent_model');
const IdcodeServices = require('./idcode_service');

class ParentService {
    static async registerUser(fname,laname,gender,email,phone,address,state,postcode,password,kidname,grade,subject,tution_slot){
        try {
            var parent_id = await IdcodeServices.generateCode("parents");
            const createUser = new ParentModel({parent_id,fname,laname,gender,email,phone,address,state,postcode,password,kidname,grade,subject,tution_slot}); 
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

    static async loginParent(email){
        try {
            return await ParentModel.findOne({email})
        } catch (error) {
            throw error;
        }
    }

    static async updateParent(parent_id,fname,laname,gender,email,phone,address,state,postcode,password,kidname,grade,subject,tution_slot){
        try {
           var query = { parent_id: parent_id };
           var values = { $set: {fname: fname, laname: laname,gender:gender,email:email,phone: phone,address: address,state: state,postcode: postcode,password: password,kidname: kidname,grade: grade,subject: subject,tution_slot: tution_slot}};
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

    static async Parent(){
        try {
            return await ParentModel.find()
        } catch (error) {
            throw error
        }
    }

}

module.exports = ParentService;