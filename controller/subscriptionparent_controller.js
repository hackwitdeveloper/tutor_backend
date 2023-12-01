const ParentPlanServices = require('../service/subscriptionparent_service');


exports.CreateParentPlan = async (req, res, next) => {
    try {
        const { parentsub_id,parent_id,fname,plan_name,plancost,status,tnx_id,date } = req.body;

        const Res = await ParentPlanServices.registerParentPlan(parent_id,fname,plan_name,plancost,status,tnx_id,date);
        let ParentplanData = { parentsub_id,parent_id,fname,plan_name,plancost : plancost,status,tnx_id,date };
        res.status(200).json(ParentplanData)

    } catch (error) {
        next(error)
    }
}

exports.Update = async (req,res, next) => {
    try {
        const { parentsub_id,parent_id,fname,plan_name,plancost,status,tnx_id,date} = req.body;
        const updateData = await ParentPlanServices.updateParentPlan(parentsub_id,parent_id,fname,plan_name,plancost,status,tnx_id,date);
        res.status(200).json(updateData)
    } catch (error) {
        next (error);
    }

}

exports.delete = async(req, res, next)=>{
    try{
        const{parentsub_id} = req.query;
        const deleteData = await ParentPlanServices.deleteParentPlan(parentsub_id);
        res.status(200).json(deleteData)
    }catch(error){
        next(error)
    }
}

exports.getId = async(req,res,next) => {
    try {
        const {parentsub_id} = req.query;
        const User = await ParentPlanServices.getParentPlan(parentsub_id);
        res.status(200).json(User)
    } catch (error) {
        next(error);
    }
}

exports.getParentplan = async(req,res,next) =>{
    try {
        const Admin = await ParentPlanServices.get();
        res.status(200).json(Admin)
    } catch (error) {
        
    }
}

exports.getparentId = async(req,res,next) => {
    try {
        const {parent_id} = req.query;
        const User = await ParentPlanServices.getid(parent_id);
        res.status(200).json(User)
    } catch (error) {
        next(error);
    }
}