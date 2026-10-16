import { useState } from "react";

function Hook1(){
    // const [age,setAge] = useState(20);
    // const [fname,setFname] = useState("Raj");
    // const [lname,setLname] = useState("shah");
    // const [is18,setIs18] = useState(true);

    const [userData,setUserData] = useState({
        fname : "",
        lname : "",
        age : 0,
        is18 : false
    });

    return (
        <>
            {/* <button  onClick={()=>{setFname(prompt("Enter your fname :"))}}>Set Fname</button>
            <button  onClick={()=>{setLname(prompt("Enter your lname :"))}}>Set Lname</button>
            <button  onClick={()=>{setAge(prompt("Enter your age:"))}}>Set Age</button>
            <button  onClick={()=>{setIs18(age>=18)}}>Set is18</button>



            <h1>Full name  : {fname} {lname}</h1>
            <h2>Age : {age}</h2>
            <h3>is18 : { (is18) ? "True" : "False" }</h3> */}

            {/* <button onClick={()=>{setUserData({...userData,fname : prompt("Enter Your Fname : ")})}}>Set Fname</button> */}

            <button onClick={()=>{setUserData({
                fname : prompt("fname :"),
                lname : prompt("lname :"),
                age : Number(prompt("age :")),
                is18 : Boolean(userData.age>18),

            })}}>Set Data</button>


            <h1>Full name : {userData.fname} {userData.lname}</h1>
            <h2>Age :{userData.age}</h2>
            <h2>is18 :{ (userData.is18) ? "True" : "False"}</h2>
        </>
    )
}

export default Hook1;