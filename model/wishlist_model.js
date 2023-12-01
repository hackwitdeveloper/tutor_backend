const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const wishlistSchema = new Schema({
    user_id:{
        type:String,
        required:true,
    },
    user_type:{
        type:String,
        required:true,
    },
    tutor_id:{
        type:String,
        required:true,
    },
});

const WishlistModel = db.model('wishlist',wishlistSchema);

module.exports = WishlistModel;