import { useState } from "react";
import {FaRegUser} from "react-icons/fa";
import {MdOutlineEmail} from "react-icons/md";
import {IoMdKey} from "react-icons/io";
import {FaFemale} from "react-icons/fa";
import axios from 'axios';
import {FaMale} from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import '../css/Signup.css'

const Signup=()=>{
    const [data,setData]=useState({name:'',email:'',password:'',gender:''});
    
    const onInput=(pro,value)=>{
        setData(previus=>({
            ...previus,
            [pro]:value
        }))
    }
     

     const Fromsubmit=(e)=>{
        e.preventDefault();
        console.log(data)
        axios.post('http://localhost:3300/route/api/save', data)
        .then((response)=>{
            console.log(response)
        })

        
        // fetch('http://localhost:3300/route/api/save',{
        //     method:'post',
        //     headers:{'Content-Type':'application/json',},
        //     body:JSON.stringify(data)
        // })
        // .then((response)=>{
        //     return response.json()
        // })
        // .then((result)=>{
        //     alert(JSON.stringify(result))
        // })
        // .catch((error)=>{
        //     alert(error.message)
        // })
        
        alert(JSON.stringify(data))
    }
    return(
        <div>
            <div className="countuner">
                <form  onSubmit={Fromsubmit} >
                    <div className="name">
                        <div className="icon">
                            <FaRegUser className="IconUser" />
                        </div>
                        <input onChange={(e)=>{onInput('name',e.target.value)}} value={data.name} type="text" placeholder="user name" />
                    </div>
                    <div className="email">
                        <div className="icon">
                            <MdOutlineEmail className="IconEmail"/>
                        </div>
                        
                        <input onChange={(e)=>{onInput('email',e.target.value)}} value={data.email} type="email" placeholder="user@email" />
                    </div>
                    <div className="password">
                        <div className="icon">
                            <IoMdKey className="IconKey"/>
                        </div>
                        
                        <input onChange={(e)=>{onInput('password',e.target.value)}} value={data.password} type="password" placeholder=" password" />
                    </div>


                     <div className="files">
                        <div className="iconF">
                            <MdOutlineFileUpload className="IconFile" />
                            <input type="file"   onChange={(e)=>{onInput('avatar',e.target.files[0])}}  />
                        </div>
                        
                    </div>


                    <div className="gender">
                        <div className="male">

                           <FaMale className="IconMale"/>
                            <input onChange={()=>{onInput('gender','Male')}} checked={data.gender=='Male'} type="radio" name="gender" />
                        </div>
                        
                    </div>
                    <div className="submit">
                        <button type="submit">Signup</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;
