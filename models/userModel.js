import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
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
    answer:{
        type:String,
        required:true,
    },
    role:{
        type:Number,
        default:0,
    }
},{timestamps:true})

export default mongoose.model('users',userSchema);


// Overall, this schema defines a users collection with fields for user information and validation rules. 
// The timestamps option helps keep track of when records are created and updated.