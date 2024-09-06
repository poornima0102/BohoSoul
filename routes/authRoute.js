import express from "express";
import {
    registerController,
    loginController,
    testController,
} from "../controllers/authController.js"
import { requireSignIn,isAdmin } from "../middlewares/authMiddleware.js";
const router=express.Router();

//register
router.post('/register',registerController);

//LOGIN
router.post('/login',loginController)
//test route
router.get('/test',requireSignIn,isAdmin,testController)

//protected route auth
router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})
export default router;