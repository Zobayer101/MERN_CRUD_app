
import '../assets/css/Signup.css';
import avatar from "../assets/img/profile.png"
const Signup = () => {
    return (
      <div>
        <div className="outSignCon">
          <div className="SignCon">
            <form action="#">
              <div className="header">
                <h2>Signup</h2>
              </div>
              <div className="ChogeAcater">
                <div className="coverAvatar">
                  <input type="file" accept=".jpg , .png, .jpge" />
                  <img src={avatar} />
                </div>
              </div>
              <div className="Outername">
                <div className="name">
                  <input type="text" required />
                  <span>First name</span>
                </div>
              </div>
              <div className="Outeremail">
                <div className="email">
                  <input required type="text" />
                  <span> @email</span>
                </div>
              </div>
              <div className="Outerpassword">
                <div className="password">
                  <input required type="password" />
                  <span>Password</span>
                </div>
              </div>
              <div className="OuterConfrom">
                <div className="conform">
                  <input required type="password" />
                  <span>Confrom password</span>
                </div>
              </div>
              <div className="resgester">
                <button>Registrar</button>
              </div>
              <div className="Have">
                <p>I have a account </p>
                <a href="#">Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Signup;