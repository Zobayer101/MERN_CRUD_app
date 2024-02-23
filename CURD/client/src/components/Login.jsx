
import "../assets/css/Login.css"

const Login = () => {
    return (
      <div>
        <div className="outLogin">
          <div className="loginCounter">
            <div className="header">
              <h2>Login</h2>
            </div>
            <form action="#">
              <div className="emailForm">
                <div className="mail">
                  <input type="text" required />
                  <span>@ Email</span>
                </div>
              </div>
              <div className="passwordForm">
                <div className="pass">
                  <input type="password" required />
                  <span>Password</span>
                </div>
              </div>
              <div className="someTxt">
                <p>Forget password ?</p>
              </div>
              <div className="btn">
                <button>Login</button>
              </div>
              <div className="NotMember">
                <p>not a member?</p><a href="#">signup now</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Login;
