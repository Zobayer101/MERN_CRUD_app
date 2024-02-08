import { useRef, useState } from "react";
import {FaRegUser} from "react-icons/fa";
import {MdOutlineEmail} from "react-icons/md";
import {IoMdKey} from "react-icons/io";
import {FaFemale} from "react-icons/fa";
import {FaMale} from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import '../css/Signup.css'

const Signup=()=>{
    const [data,setData]=useState({name:'',email:'',password:'',gender:'',avatar:''});
    const filex =useRef()
    const onInput=(pro,value)=>{
        setData(previus=>({
            ...previus,
            [pro]:value
        }))
    }
    const Fromsubmit=(e)=>{
        e.preventDefault();
        
        console.log(filex.current.files[0])
        var fx=filex.current.files[0]
        setData(pre=>({
            ...pre,
            avatar:fx
        }))
        
        fetch('http://localhost:3300/route/api/save',{
            method:'post',
            headers:{'Content-Type':'application/json',},
            body:JSON.stringify(data)
        })
        .then((response)=>{
            return response.json()
        })
        .then((result)=>{
            alert(JSON.stringify(result))
        })
        .catch((error)=>{
            alert(error.message)
        })
        
        alert(JSON.stringify(data))
    }
    return(
        <div>
            <div className="countuner">
                <form action="#" onSubmit={Fromsubmit}>
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
                            <input  ref={filex} type="file" name="avatar" />
                        </div>
                        
                    </div>


                    <div className="gender">
                        <div className="male">

                           <FaMale className="IconMale"/>
                            <input onChange={()=>{onInput('gender','Male')}} checked={data.gender=='Male'} type="radio" name="gender" />
                        </div>
                        <div className="female">
                            <FaFemale className="IconFemale"/>
                            <input onChange={()=>{onInput('gender',"Female")}} checked={data.gender=='Female'} type="radio" name="gender"/>
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
