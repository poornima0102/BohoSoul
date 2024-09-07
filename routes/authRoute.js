import express from "express";
import {
    registerController,
    loginController,
    testController,
    forgotPasswordController,
} from "../controllers/authController.js"
import { requireSignIn,isAdmin } from "../middlewares/authMiddleware.js";
const router=express.Router();

//register
router.post('/register',registerController);

//LOGIN
router.post('/login',loginController)

//forgot password
router.post('/forgot-password',forgotPasswordController)

//test route
router.get('/test',requireSignIn,isAdmin,testController)

//protected User route auth
router.get("/user-auth",requireSignIn,(req,res)=>{
    console.log("User auth route hit")
    res.status(200).send({ok:true});
})

//protected admin route auth
router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
    console.log("User auth route hit")
    res.status(200).send({ok:true});
})
export default router;