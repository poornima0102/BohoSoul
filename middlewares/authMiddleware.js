// import JWT from 'jsonwebtoken';
// import userModel from '../models/userModel.js';
// //Protected routes token base
// export const requireSignIn=async(req,res,next)=>{
//    try{
//     const decode=JWT.verify(
//         req.headers.authorization,
//         process.env.JWT_SECRET
//     );
//     req.user=decode;
//     next();
//    }catch(error){
//     console.log(error)
//     }
// };

// //admin access
// export const isAdmin=async(req,res,next)=>{
//     try{
//       const user=await userModel.findById(req.user._id)
//       if(user.role!==1){
//         return res.status(401).send({
//           success:false,
//           message:"unauthorised access",
  
//         });
//       }else{
//         next();
//       }
  
//     }catch(error){
//       console.log(error)
//       res.status(401).send({
//         success:false,
//         message:"error in admin middleware ",
//         error,
//       })
//     }
// };


import JWT from 'jsonwebtoken';
import userModel from '../models/userModel.js';

// Protected routes token based
export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).send({
        success: false,
        message: 'Authorization token missing',
      });
    }

    const decode = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    console.log("Token verification error:", error);
    return res.status(401).send({
      success: false,
      message: 'Invalid or expired token',
    });
  }
};

// Admin access
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);

    if (user.role !== 1) {
      return res.status(403).send({
        success: false,
        message: 'Unauthorized access - Admins only',
      });
    } else {
      next();
    }
  } catch (error) {
    console.log("Error in admin middleware:", error);
    return res.status(500).send({
      success: false,
      message: 'Server error in admin middleware',
      error,
    });
  }
};
