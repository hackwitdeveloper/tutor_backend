const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const db = require('../config/db');

const { Schema } = mongoose;

const parentSchema = new Schema({
    parent_id: {
        type:String,
        required:true,
    },
    fname:{
        type:String,
        required:true,
    },
    laname:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        lowercase:true,
        required:true,
    },
    phone:{
        type:String,
        required:true,        
    },
    address:{
        type:String,
        required:true,        
    },
    state:{
        type:String,
        required:true,        
    },
    postcode:{
        type:String,
        required:true,        
    },
    password:{
        type:String,
        required:true,        
    },
    kidname:{
        type:String,
        required:true,        
    },
    grade:{
        type:String,
        required:true,        
    },
    subject:{
        type:String,
        required:true,        
    },
    tution_slot:{
        type:String,
        required:true,        
    },
    
    credits : {
        type:String,
        required: true,
    }
});

// parentSchema.pre('save',async function() {
//     try {
//         var parent = this;
//         const salt = await(bcrypt.genSalt(10));
//         const hashpass = await bcrypt.hash(parent.password,salt);

//         parent.password = hashpass;
        
//     } catch (error) {
//         throw error;
//     }
// });

// parentSchema.methods.comparePassword = async function(password){
//     try {
//         const isMatch = await bcrypt.compare(password,this.password);
//         return isMatch;
//     } catch (error) {
//         throw error;
//     }
// }

const ParentModel = db.model('parents',parentSchema);

module.exports = ParentModel;
