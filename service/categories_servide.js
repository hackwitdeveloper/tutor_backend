const CategoriesModel = require("../model/categories_model");

class CategoriesService {

    static async createCategories(subject,image) {
        try {
           const categories = await CategoriesModel({subject,image});
           return await categories.save();
        } catch (error) {
            throw error
        }
    }
    static async update(subject,image) {
       const values = { $set : {subject:subject,image:image}};
       return await CategoriesModel.updateOne(values);
    }

    static async delete(subject){
        try {
            var query = { subject:subject };
            return await CategoriesModel.findOneAndDelete(query);
        } catch (error) {
            throw error
        }
    }

    static async get(subject){
        try {
            var query = { subject:subject };
            return await CategoriesModel.find(query);
        } catch (error) {
            throw error
        }
    }
}
module.exports = CategoriesService;