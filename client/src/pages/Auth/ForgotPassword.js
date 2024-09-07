import React, { useState } from 'react';
import { json, useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import Layout from '../../components/Layout/Layout';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");

    const navigate = useNavigate();
    

    // form submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
                { email, newPassword ,answer}
            );

            if (res && res.data.success) {
                toast.success(res.data.message);
               
              
                navigate('/login');
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            toast.error("Something went wrong");
        }
    };
  return (
    <Layout title="Login">
            <div className="auth-container-single">
                <h1 className="auth-form-title">RESET PASSWORD</h1>
                {/* <p className="auth-form-subtitle">Reset Password</p> */}
                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Enter your pet name</label>
                        <input
                            type="text"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Enter your new password</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            required
                        />
                    </div>
                   
                    <button type="submit" className="btn btn-primary auth-btn">
                        RESET
                    </button>
                </form>
               
            </div>
        </Layout>
    );
};
  

export default ForgotPassword
