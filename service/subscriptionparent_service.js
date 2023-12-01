const ParentPlanModel =require('../model/subscriptionparent_model')
const IdcodeServices = require("./idcode_service");

class ParentPlanServices{
    static async registerParentPlan(parent_id,fname,plan_name,plancost,status,tnx_id,date){
        try{
            var parentsub_id = await IdcodeServices.generateCode("ParentPlan");
            const createUser = new ParentPlanModel({parentsub_id,parent_id,fname,plan_name,plancost,status,tnx_id,date});
            return await createUser.save();
        }catch(err){
            throw err;
        }
    }

    static async updateParentPlan(parentsub_id,parent_id,fname,plan_name,plancost,status,tnx_id,date){
        try {
            var query = {parentsub_id :parentsub_id};
            var values = {$set : {parent_id : parent_id,fname : fname,plan_name : plan_name,plancost : plancost,status : status,tnx_id : tnx_id,date : date}};
            
            return await ParentPlanModel.updateOne(query,values)
            
        } catch (error) {
           throw error 
        }
    }

    static async deleteParentPlan(parentsub_id){
        try{
            var query = {parentsub_id : parentsub_id};
            return await ParentPlanModel.findOneAndDelete(query);

        }catch(error){
            throw error;
        }
    }

    static async getParentPlan(parentsub_id){
        try {
            
            return await ParentPlanModel.findOne({parentsub_id})
        } catch (error) {
            throw error
        }
    }

    static async getid(parent_id){
        try {
            
            return await ParentPlanModel.findOne({parent_id})
        } catch (error) {
            throw error
        }
    }

    static async get(){
        try {
            return await ParentPlanModel.find();
        } catch (error) {
            throw error
        }
    }

  
}
module.exports = ParentPlanServices;