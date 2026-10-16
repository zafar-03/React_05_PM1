import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [userdata,setUserData] = useState(null);
    const navigate = useNavigate();
    const handleSubmit = ()=>{
        setUserData({
            email : email,
            password : password
        });
        ///
    }
    useEffect(()=>{
        if(userdata==null)
            return

        const localdata = JSON.parse(localStorage.getItem("user"));
        if(localdata.email == userdata.email && localdata.password == userdata.password){
            localStorage.setItem("login",JSON.stringify({islogin : true}));
            navigate("/");
        }else{
            navigate("/register");
            localStorage.setItem("login",JSON.stringify({islogin : false}));
        }
    },[userdata]);
    
    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center min-vh-100">
                    <div className="col-12 col-md-6 col-lg-4">

                        <div className="card shadow-sm">
                            <div className="card-body p-4">

                                <h2 className="text-center mb-4">Sign In</h2>

                                <form>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="name@example.com"
                                            required 
                                            
                                            onChange={(e)=>{setEmail(e.target.value)}}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            placeholder="Enter your password"
                                            required
                                            onChange={(e)=>{setPassword(e.target.value)}}

                                        />
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="remember"
                                                name="remember"
                                            />
                                            <label className="form-check-label" htmlFor="remember">
                                                Remember me
                                            </label>
                                        </div>

                                        <a href="forgot-password.html" className="text-decoration-none">
                                            Forgot password?
                                        </a>
                                    </div>

                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                                            Sign In
                                        </button>
                                    </div>

                                </form>

                                <hr />

                                <p className="text-center mb-0">
                                    Don't have an account?
                                    <a href="register" className="text-decoration-none">Sign up</a>
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;