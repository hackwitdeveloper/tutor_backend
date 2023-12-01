const mongoose = require('mongoose');
const db = require('../config/db');

const {Schema } = mongoose;

const ParentSubscriptionSchema = new Schema({
    parentsub_id :{
        type : String,
        required : true,
    },

    parent_id : {
        type : String,
        required : true,
    },
    fname : {
        type : String,
        required : true,
    },
    plan_name : {
        type : String,
        required : true,
    },
    plancost : {
        type : String,
        required : true,
    },
    status : {
        type : String,
        required : true,
    },
    tnx_id : {
        type : String,
        required : true,
    },
    date : {
        type : String,
        required : true,
    }
});

const ParentPlanModel = db.model('parentplan', ParentSubscriptionSchema );

module.exports = ParentPlanModel;