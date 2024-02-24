import file from '../lib/file';
import { useEffect, useRef, useState } from 'react';
import '../assets/css/Signup.css';
import avatar from "../assets/img/profile.png";
import { NavLink,useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const Signup = () => {

  const [data, setData] = useState({ name: '', email: '', password: '', Cpassword: '', photo: '' });
  const [nav, setNav] = useState(false);

  const validRef = useRef(null);
  const mesageRef = useRef(null);
  const navigate = useNavigate();

  //validiti chack
  useEffect(() => {
    if ([data.name && data.email && data.password && data.Cpassword]== ''  ) {
      validRef.current.setAttribute("disabled", null);
      validRef.current.classList.add('btn');
    } else if (data.password != data.Cpassword) {
       validRef.current.setAttribute("disabled", null);
       validRef.current.classList.add("btn");   
     }
    else {
      validRef.current.removeAttribute("disabled");
      validRef.current.classList.remove('btn');
    }
  },[data])
  //data store on inner state
  const handelChange = (value, propaty) => {
    setData((pre) => ({
      ...pre,
      [propaty]:value,
    }))
  }
  //chack password matching
  // useEffect(() => {
    
  // },[OutFocus])
  const OutFocus = () => {
    if (data.password != data.Cpassword) {
       mesageRef.current.classList.add("notMatch");
       setTimeout(() => {
         mesageRef.current.classList.remove("notMatch");
       }, 3000);
      
      //console.log("Ok I am here");
    }
    
  }
  //conver to base64 format file
  const FileSet = async (value) => {
    var myfile = await file(value);
    
    setData((pre) => ({
      ...pre,
      ['photo']:myfile
    }))
  }
  
  //submit data 
  let url = "http://localhost:3300/route/api/save";
  const subMitData = async (e) => {
    try {
      e.preventDefault();
     let response= await fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
     })
      let result = await response.json();
      if (result.data == 'ok') {
        
        console.log('redirect ok')
        setNav(true)
        
      } 
      alert(JSON.stringify(result.data));
    } catch (error) {
      console.log(error.message)
    }
  }
  console.log(nav)
  if (nav) {
    return navigate("/OTP");
  }
    return (
      <div>
        <div className="outSignCon">
          <div ref={mesageRef} className="notMatchx">
            <p>Password not match !</p>
          </div>
          <div className="SignCon">
            <form onSubmit={(e) => subMitData(e)}>
              <div className="header">
                <h2>Signup</h2>
              </div>
              <div className="ChogeAcater">
                <div className="coverAvatar">
                  <input
                    type="file"
                    accept=".jpg , .png, .jpge"
                    onChange={(e) => FileSet(e.target.files[0])}
                  />
                  <img src={data.photo || avatar} />
                </div>
              </div>
              <div className="Outername">
                <div className="name">
                  <input
                    type="text"
                    required
                    value={data.name}
                    onChange={(e) => {
                      handelChange(e.target.value, "name");
                    }}
                  />
                  <span>First name</span>
                </div>
              </div>
              <div className="Outeremail">
                <div className="email">
                  <input
                    value={data.email}
                    required
                    onChange={(e) => {
                      handelChange(e.target.value, "email");
                    }}
                    type="text"
                  />
                  <span> @email</span>
                </div>
              </div>
              <div className="Outerpassword">
                <div className="password">
                  <input
                    value={data.password}
                    onChange={(e) => {
                      handelChange(e.target.value, "password");
                    }}
                    required
                    type="password"
                  />
                  <span>Password</span>
                </div>
              </div>
              <div className="OuterConfrom">
                <div className="conform">
                  <input
                    value={data.Cpassword}
                    onBlur={OutFocus}
                    required
                    type="password"
                    onChange={(e) => {
                      handelChange(e.target.value, "Cpassword");
                    }}
                  />
                  <span>Confrom password</span>
                </div>
              </div>
              <div className="resgester">
                <button ref={validRef} type="submit">
                  Registrar
                </button>
              </div>
              <div className="Have">
                <p>I have a account </p>
                
                <NavLink to={"/login"}>Login</NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Signup;