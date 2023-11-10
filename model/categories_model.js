const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const categoriesSchema = new Schema({
    subject:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
});

const CategoriesModel = db.model('categories',categoriesSchema);

module.exports = CategoriesModel;