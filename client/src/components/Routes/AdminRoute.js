// import { useState,useEffect } from "react";

// import { useAuth } from "../../context/auth";
// import { Outlet } from "react-router-dom";
// import axios from "axios";
// import Spinner from "../Spinner";
// export default function AdminRoute(){
//     const [ok,setOk]=useState(false)
//     const [auth,setAuth]=useAuth()
 

//     useEffect(()=>{
//         const authCheck = async()=>{
//             const res=await axios.get('http://localhost:8080/api/v1/auth/admin-auth')
              
//             if(res.data.ok){
//                 setOk(true)
//             }
//             else{
//                 setOk(false)
            
//             }
//         }
//         if(auth?.token) authCheck()
//     },[auth?.token])
 
//     return ok ? <Outlet/> : <Spinner path=" "/>
// }

import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function AdminRoute() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();
  const navigate = useNavigate(); // Use navigate for redirection

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/v1/auth/admin-auth', {
          headers: {
            Authorization: auth?.token, // Ensure you pass the token
          },
        });

        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
          navigate('/'); // Redirect to home if not authorized
        }
      } catch (error) {
        if (error.response && error.response.status === 403) {
          // Handle 403 Forbidden by redirecting to home
          navigate('/');
        } else {
          // Handle any other errors (e.g., 500, network issues)
          console.log('Error:', error);
        }
      }
    };

    if (auth?.token) {
      authCheck();
    }
  }, [auth?.token, navigate]);

  return ok ? <Outlet /> : <Spinner path="" />;
}
