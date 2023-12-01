const TutorPlanServices = require('../service/subscriptiontutor_service');


exports.CreateTutorPlan = async (req, res, next) => {
    try {
        const { tutorsub_id,tutor_id,fname,plan_name,plancost,status,tnx_id,date } = req.body;

        const Res = await TutorPlanServices.registerTutorPlan(tutor_id,fname,plan_name,plancost,status,tnx_id,date);
        let TutorplanData = { tutorsub_id,tutor_id,fname,plan_name,plancost : plancost,status,tnx_id,date };
        res.status(200).json(TutorplanData)

    } catch (error) {
        next(error)
    }
}

exports.Update = async (req,res, next) => {
    try {
        const { tutorsub_id,tutor_id,fname,plan_name,plancost,status,tnx_id,date} = req.body;
        const updateData = await TutorPlanServices.updateTutorPlan(tutorsub_id,tutor_id,fname,plan_name,plancost,status,tnx_id,date);
        res.status(200).json(updateData)
    } catch (error) {
        next (error);
    }

}

exports.delete = async(req, res, next)=>{
    try{
        const{tutorsub_id} = req.query;
        const deleteData = await TutorPlanServices.deleteTutorPlan(tutorsub_id);
        res.status(200).json(deleteData)
    }catch(error){
        next(error)
    }
}

exports.getId = async(req,res,next) => {
    try {
        const {tutorsub_id} = req.query;
        const User = await TutorPlanServices.getTutorPlan(tutorsub_id);
        res.status(200).json(User)
    } catch (error) {
        next(error);
    }
}

exports.getTutorplan = async(req,res,next) =>{
    try {
        const tutor = await TutorPlanServices.get();
        res.status(200).json(tutor)
    } catch (error) {
        
    }
}

exports.getTutorId = async(req,res,next) => {
    try {
        const {tutor_id} = req.query;
        const User = await TutorPlanServices.getid(tutor_id);
        res.status(200).json(User)
    } catch (error) {
        next(error);
    }
}