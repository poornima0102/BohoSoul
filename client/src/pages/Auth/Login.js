import React, { useState } from 'react';
import { json, useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import Layout from '../../components/Layout/Layout';
import { useAuth } from '../../context/auth';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[auth,setAuth]=useAuth();
    const navigate = useNavigate();
    const loacation=useLocation()

    // form submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API}/api/v1/auth/login`,
                { email, password }
            );

            if (res && res.data.success) {
                toast.success(res.data.message);
                setAuth({
                    ...auth,
                    user:res.data.user,
                    token:res.data.token,
                })
                localStorage.setItem("auth",JSON.stringify(res.data))
                navigate(loacation.state || '/');
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
                <h2 className="auth-form-title">Welcome Back!</h2>
                <p className="auth-form-subtitle">Please login with your personal info</p>
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
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            required
                        />
                    </div>
                    <button type="button" className="btn btn-primary auth-btn" onClick={()=>{navigate('/forgot-password')}}>
                        Forgot Password?
                    </button>
                    <button type="submit" className="btn btn-primary auth-btn">
                        Sign In
                    </button>
                </form>
                <p className="auth-footer-text">
                    Don't have an account? <span className="auth-link" onClick={() => navigate('/register')}>Sign Up</span>
                </p>
            </div>
        </Layout>
    );
};

export default Login;


