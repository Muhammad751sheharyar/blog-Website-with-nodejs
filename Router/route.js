const express=require("express");
const router=express.Router();
const {home,Name}=require("../controllers/Auth");
const{login}=require("../controllers/Auth");
router.post("/home",home);
router.post("/name",Name);
router.post("/login",login);

module.exports=router;