import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const [formdata,setFormData] = useState(null);
    const handleSubmit = ()=>{
        setFormData({
            email : email,
            password: password
        });

        navigate("/");
    }

    useEffect(()=>{
        if(formdata==null)
            return;
        localStorage.setItem("user",JSON.stringify(formdata));
        localStorage.setItem("login",JSON.stringify({islogin : true}));
    },[formdata]);

    

    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center min-vh-100">
                    <div className="col-12 col-md-6 col-lg-4">

                        <div className="card shadow-sm">
                            <div className="card-body p-4">

                                <h2 className="text-center mb-4">Sign Up</h2>

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

                                    

                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                                            Sign Up
                                        </button>
                                    </div>

                                </form>

                                <hr />

                                <p className="text-center mb-0">
                                    You've aleady an account?
                                    <a href="login" className="text-decoration-none">Sign In</a>
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;