import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import '../css/Login.css'
import { useState } from "react";

const Login=()=>{
    const [data,setData]=useState({email:'',password:''});

    const onInput=(pro,value)=>{
        setData(previus=>({
            ...previus,
            [pro]:value
        }))
    }
    const Fromsubmit=()=>{
        alert(JSON.stringify(data))
    }
    return(
        <div>
            <div className="contuner">
                <form action="#" onSubmit={Fromsubmit} id="Form">
                <div className="compo">
                        <div className="email">
                        <div className="outeUser">
                            <MdEmail  className="user" />
                        </div>
                        <input onChange={(e)=>{onInput('email',e.target.value)}} value={data.email} type="email" placeholder="Enter your email" />
                    </div>
                    <div className="password">
                        <div className="userLock">
                            <FaLock className="lock" />
                        </div>
                        <input type="password" onChange={(e)=>{onInput('password',e.target.value)}} value={data.password} placeholder="Enter your password"/>
                    </div>
                    <div className="remember">
                        <input type="checkbox" /><p>Remember me</p>
                    </div>
                    <div className="submit">
                        <button type="submit">Submit</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}
export default Login