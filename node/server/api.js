
const path = require("path");
const fsTool = require("../tool/fsapi.js");
const Util = require("../tool/util.js");

const api = {
    upload(req, res){
        return res.status(200).json({data:null, status:200,msg:"success"});
    },
    update(req, res){
       
        return res && res.status("200").json({status:200, data:null,msg:"update success"});
    },
    create(req,res){
        return res && res.status("200").json({status:200, data:null,msg:"create success"});
    }
}

module.exports = api;