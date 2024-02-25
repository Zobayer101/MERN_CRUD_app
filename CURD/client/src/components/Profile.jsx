import "../assets/css/Profile.css";
import image from "../assets/img/profile.png";

const Profile = () => {
  return (
    <div>
      <div className="proCon">
        <div className="proInCon">
          <div className="header">
            <h2>Profile</h2>
          </div>
          <div className="imgHead">
            <div className="img">
              <img src={image} alt="" />
            </div>
          </div>

          <div className="InerFild">
            <div className="row1">
              <div className="Fname">
                <span>First Name</span>
                <input type="text" placeholder="First name" />
              </div>
              <div className="Lname">
                <span>Last Name</span>
                <input type="text" placeholder="Last naem" />
              </div>
            </div>
            <div className="row2">
              <div className="Email">
                <span>Email</span>
                <input type="text" placeholder=" Enter @ email" />
              </div>
              <div className="Barth">
                <span>Barth</span>
                <input type="date" />
              </div>
            </div>
            <div className="row3">
              <button>Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
