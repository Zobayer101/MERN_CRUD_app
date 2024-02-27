import { Link } from "react-router-dom";
import "../assets/css/Login.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  var [data, setData] = useState({ email: "", password: "" });
  var navigate = useNavigate();

  //app Login url 
  let url = "http://localhost:3300/route/login/api/user";
  const subMItData = async (e) => {
    e.preventDefault();
   
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    let result = await response.json();
    if (result.data) {

      let TOKEN =result.token;
      localStorage.setItem("TOKEN", JSON.stringify(TOKEN));
      navigate("/");
    } else {
      alert(JSON.stringify(result.msg));
      navigate("/signup");
    }
    
  }
  const onchangeHandel = (propaty, value) => {
    setData((pre) => ({
      ...pre,
      [propaty]:value
      }))
  }
  useEffect(() => {
     let ismember = localStorage.getItem("TOKEN");
     if (ismember) return navigate("/");
    
  })
 
  return (
    <div>
      <div className="outLogin">
        <div className="loginCounter">
          <div className="header">
            <h2>Login</h2>
          </div>
          <form action="#" onSubmit={subMItData}>
            <div className="emailForm">
              <div className="mail">
                <input
                  onChange={(e) => onchangeHandel("email",e.target.value)}
                  type="text"
                  required
                  value={data.email}
                />
                <span>@ Email</span>
              </div>
            </div>
            <div className="passwordForm">
              <div className="pass">
                <input
                  onChange={(e) => onchangeHandel("password",e.target.value)}
                  type="password"
                  value={data.password}
                  required
                />
                <span>Password</span>
              </div>
            </div>
            <div className="someTxt">
              <p>Forget password ?</p>
            </div>
            <div className="btn">
              <button type="submit">Login</button>
            </div>
            <div className="NotMember">
              <p>not a member?</p>
              <Link to={"/signup"}>signup now</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
