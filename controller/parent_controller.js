const ParentService = require('../service/parent_service');
const jwt = require('jsonwebtoken');

exports.register = async (req,res, next)=> {
    try {
        const { parent_id,fname,laname,gender,email,phone,address,state,postcode,password,kidname,grade,subject,tution_slot } = req.body;
       
       const user = await ParentService.checkuser(email);

       if(user){
        return res.status(400).json({message : "user already exist"})
       }
       
        const successRes = await ParentService.registerUser(fname,laname,gender,email,phone,address,state,postcode,password,kidname,grade,subject,tution_slot);
        
        res.status(200).json({status:true,success:"User Registered SuccessFully",successRes});
        
    } catch (error) {
        throw error
    }
}

exports.parentLogin = async (req,res, next) =>{
    try {
        const { email,password } = req.body;
        const parent = await ParentService.loginParent(email,password);
        
        if(!parent) {
           res.status(401).json({message:"Parent not found"})
        }
        const isMatch = await parent.comparePassword(password);
        if(!isMatch){
            res.status(401).json({message : "Invalid Password"});
        }
        const token = jwt.sign({email: email,role:'Parent'}, 'Hackwit',{ expiresIn: '1h'});
        res.status(200).json({token});
    } catch (error) {
        throw error
    }
}

exports.parentUpdate = async (req,res,next)=>{
    try {
        const {parent_id,fname,laname,gender,email,phone,address,state,postcode,password,kidname,grade,subject,tution_slot } = req.body;
        const successRes = await ParentService.updateParent(parent_id,fname,laname,gender,email,phone,address,state,postcode,password,kidname,grade,subject,tution_slot);
        res.status(200).json(successRes);
       
    } catch (error) {
       throw error
        
    }
}

exports.parentDelete = async (req,res,next) =>{
    try {
        const {parent_id:parent_id } = req.query;
        const Parent = await ParentService.deleteParent(parent_id);
        res.status(200).json({status:true,message:"Your Account is Deleted.",Parent});
    } catch (error) {
        throw error
        
    }
}

exports.parentGet = async (req,res,next) =>{
    try {
        const { parent_id:parent_id } = req.body;
        const getData = await ParentService.getParent(parent_id);
        res.status(200).json(getData);
    } catch (error) {
        throw error
    }
}

exports.get = async (req,res,next) => {
    try {
        const getData = await ParentService.Parent()
        res.status(200).json(getData)
    } catch (error) {
        next (error)
    }
}