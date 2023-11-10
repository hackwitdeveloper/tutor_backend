const CategoriesService = require("../service/categories_servide");

exports.categories = async (req,res,next) =>{
    try {
       const {subject,image } = req.body;
       const data = await CategoriesService.createCategories(subject,image);
       res.status(200).json(data);
    } catch (error) {
       throw error 
    }
}

exports.update = async (req,res,next)=>{
    try {
        const { subject,image } = req.body;
        const updateData = await CategoriesService.update(subject,image);
        res.status(200).json({status:true,message:"Categories Updated",updateData});
    } catch (error) {
        throw error
    }
}
exports.delete = async (req,res,next)=>{
    try {
     const { subject:subject } = req.body;
     const deleteData = await CategoriesService.delete(subject);
     res.status(200).json({message:"Categoires Deleted",deleteData});   
    } catch (error) {
        throw error
    }
}
exports.get = async (req,res,next) =>{
    try {
       const { subject:subject } = req.body;
       const getData = await CategoriesService.get(subject);
       res.status(200).json(getData);
    } catch (error) {
       throw error 
    }
}
