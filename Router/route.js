const express=require("express");
const router=express.Router();
const {home, CreateBlog}=require("../controllers/Auth");
const{login}=require("../controllers/Auth");
// const{Create}=require("../controllers/Auth")
const{viewBlog}=require("../controllers/Auth")
router.post("/home",home);
router.post("/login",login);
router.post("/Blog",CreateBlog);
router.get("/ViewBlogs",viewBlog);

module.exports=router;