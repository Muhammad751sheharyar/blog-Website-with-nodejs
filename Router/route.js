const express=require("express");
const router=express.Router();
const {home}=require("../controllers/Auth");
const{login}=require("../controllers/Auth");
const{Create}=require("../controllers/Auth")
router.post("/home",home);
router.post("/login",login);
router.post("/Blog",Create);

module.exports=router;