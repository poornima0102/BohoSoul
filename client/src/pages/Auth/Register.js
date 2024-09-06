// import React,{useState} from 'react'
// import Layout from '../../components/Layout/Layout'
// import toast from 'react-hot-toast'
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// const Register = () => {
//     const [name,setName]=useState("");
//     const [email,setEmail]=useState("");
//     const [password,setPassword]=useState("");
//     const [phone,setPhone]=useState("");
//     const [address,setAddress]=useState("");
//     const navigate=useNavigate();
//     //form fn
//     const handleSubmit=async(e)=>{
//         e.preventDefault();
        
//         try{
//             const res=await axios.post(
//                 `${process.env.REACT_APP_API}/api/v1/auth/register`,
//                 {name,email,password,phone,address}
//             )
            
//             if(res && res.data.success){
//                 toast.success(res.data && res.data.message)
//                 navigate('/login')
//             }else{
//                 toast.error(res.data.message)
//             }

//         }catch(error){
//             console.log(error)
//             toast.error("Something went wrong")
//         }
//      }
    
    
//     return (
//         <Layout title={"Register"}>
//             <div className='register'>
//                 <h1>Register Page</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputName" className="form-label">
//                             Name
//                         </label>
//                         <input type="text" 
//                         value={name}
//                         onChange={(e)=>setName(e.target.value)}
//                         className="form-control" 
//                         id="exampleInputEmail1"
//                         required />
                        
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputName" className="form-label">
//                             Email
//                         </label>
//                         <input type="email" 
//                         value={email}
//                         onChange={(e)=>setEmail(e.target.value)}
//                         className="form-control" 
//                         id="exampleInputEmail1"
//                         required />
                        
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputPassword1"
//                          className="form-label">
//                             Password
//                         </label>
//                         <input type="password"
//                         value={password}
//                         onChange={(e)=>setPassword(e.target.value)}
//                          className="form-control"
//                           id="exampleInputPassword1"
//                           required />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputName" className="form-label">
//                             Phone
//                         </label>
//                         <input type="text" 
//                         value={phone}
//                         onChange={(e)=>setPhone(e.target.value)}
//                         className="form-control" 
//                         id="exampleInputEmail1"
//                         required />
                        
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputName" className="form-label">
//                             Address
//                         </label>
//                         <input type="text" 
//                         value={address}
//                         onChange={(e)=>setAddress(e.target.value)}
//                         className="form-control" 
//                         id="exampleInputEmail1"
//                         required />
                        
//                     </div>
//                     <button type="submit" className="btn btn-primary">
//                         Submit
//                     </button>
//                 </form>

//             </div>
//         </Layout>
//     )
// }

// export default Register


import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    // Form submit function
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API}/api/v1/auth/register`,
                { name, email, password, phone, address }
            );

            if (res && res.data.success) {
                toast.success(res.data.message);
                navigate('/login');
            } else {
                toast.error(res.data.message);
            }

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <Layout title={"Register"}>
            <div className="register-container">
                <div className="register-wrapper">
                    {/* Left Section */}
                    <div className="register-left">
                        <h2>Welcome Back!</h2>
                        <p>To keep connected with us please login with your personal info</p>
                        <button onClick={() => navigate('/login')}>Log In</button>
                    </div>

                    {/* Right Section */}
                    <div className="register-right">
                        <h2>Create Account</h2>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input 
                                    type="text" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                    type="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input 
                                    type="password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input 
                                    type="text" 
                                    value={phone} 
                                    onChange={(e) => setPhone(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input 
                                    type="text" 
                                    value={address} 
                                    onChange={(e) => setAddress(e.target.value)} 
                                    required 
                                />
                            </div>
                            <button type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Register;
