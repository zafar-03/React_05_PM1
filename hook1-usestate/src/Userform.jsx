import { useEffect, useState } from 'react';
import './Userform.css';
function Userform() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [cpwd, setCpwd] = useState("");

    const [userdata,setUserdata] = useState(null);

    const handleClick =  ()=>{
        console.log(fname,lname,email,pwd,cpwd);

         setUserdata({
            fname : fname,
            lname : lname,
            email : email,
            pwd : pwd,
            cpwd : cpwd
        });
    }


    useEffect(()=>{
        if (userdata != null) {
            localStorage.setItem("userdata",JSON.stringify(userdata));
        }
    },[userdata]);

    return (
        <div className="container">
            <div className="form-box">

                <div className="title">
                    <span></span>
                    <h1>Register</h1>
                    <span></span>
                </div>

                <p className="subtitle">
                    Create your account. It's free and only takes a minute.
                </p>

                <form>

                    <div className="name-fields">
                        <input onChange={(e) => { setFname(e.target.value) }} type="text" placeholder="First Name" />
                        <input onChange={(e) => { setLname(e.target.value) }} type="text" placeholder="Last Name" />
                    </div>

                    <input onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Email" />

                    <input onChange={(e) => { setPwd(e.target.value) }} type="password" placeholder="Password" />

                    <input onChange={(e) => { setCpwd(e.target.value) }} type="password" placeholder="Confirm Password" />

                    <div className="terms">
                        <input onChange={(e) => { console.log(e.target.value) }} type="checkbox" id="terms" />

                        <label htmlFor="terms">
                            I accept the
                            <a href="#">Terms of Use</a>
                            &
                            <a href="#">Privacy Policy</a>.
                        </label>
                    </div>

                    <button type="submit" onClick={handleClick}>
                        Register Now
                    </button>

                </form>

            </div>

            <p className="login">
                Already have an account?
                <a href="#">Sign in</a>
            </p>

            <table border={"1"}>
                <thead>
                    <tr>
                        <th>Data</th>
                        <td>Value</td>
                    </tr>
                </thead>
                <tbody>
                    {(fname) ? [fname].map((data,index) => {
                        return (
                            <tr key={index}>
                                <td>Firstname :</td>
                                <td>{fname}</td>
                            </tr>
                        )
                    }) : []}
                </tbody>
            </table>
        </div>

    )
}


export default Userform;
