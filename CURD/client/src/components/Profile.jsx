import "../assets/css/Profile.css";
import image from "../assets/img/profile.png";
import Modal from "./Modal";
import { useEffect,  useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Profile = ({ open, setOpen, ID }) => {
  
  var [update, setUpdate] = useState({
    fname: "",
    lname: "",
    email: "",
    barth: "",
    photo: "",
  });
  var navigate = useNavigate();

  useEffect(() => {
    let url = "http://localhost:3300/route/one/user/api/read";
    let TOKEN = localStorage.getItem("TOKEN");
    fetch(url, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        TOKEN,
        ID: ID,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.data[0]) {
          let {
            fname = "",
            lname = "",
            email = "",
            barth = "",
            photo = "",
          } = result.data[0];
          setUpdate((pre) => ({
            ...pre,
            fname,
            lname,
            email,
            barth,
            photo,
          }));
        } else {
          localStorage.removeItem("TOKEN");
          return navigate("/login");
        }
      })
      .catch((error) => console.log(error));
  }, [ID, navigate]);

  const onChangeHandl = (propaty, value) => {
     
    setUpdate((pre) => ({
      ...pre,
      [propaty]:value
    }))
   
  };
 
  let UpdateData = async () => {
    try {
      let url = "http://localhost:3300/route/user/data/api/update";
    let TOKEN = localStorage.getItem('TOKEN');
    
    let res = await fetch(url, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        TOKEN:TOKEN,
        ID:ID,
      },
      body:JSON.stringify(update),
    })
    let result = await res.json();
      if (result) {
           alert('OK')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  
  if (!ID || !update) return <h2>Loading...</h2>;
  return (
    <div>
      <div className="proCon">
        <div className="proInCon">
          <div className="header">
            <div onClick={() => Modal(open, setOpen)} className="crose">
              &#x274C;
            </div>
            <h2>Profile</h2>
          </div>
          <div className="imgHead">
            <div className="img">
              <img src={update.photo || image} alt="" />
            </div>
          </div>

          <div className="InerFild">
            <div className="row1">
              <div className="Fname">
                <span>First Name</span>
                <input
                  type="text"
                  onChange={(e) => onChangeHandl("fname", e.target.value)}
                  value={update.fname}
                  placeholder="First name"
                />
              </div>
              <div className="Lname">
                <span>Last Name</span>
                <input
                  type="text"
                  onChange={(e) => onChangeHandl("lname", e.target.value)}
                  value={update.lname }
                  placeholder="Last naem"
                />
              </div>
            </div>
            <div className="row2">
              <div className="Email">
                <span>Email</span>
                <input
                  type="text"
                  onChange={(e) => onChangeHandl("email", e.target.value)}
                  value={update.email }
                  placeholder=" Enter @ email"
                />
              </div>
              <div className="Barth">
                <span>Barth</span>
                <input
                  type="date"
                  onChange={(e) => onChangeHandl("barth", e.target.value)}
                  value={update.barth }
                />
              </div>
            </div>
            <div className="row3">
              <button  onClick={UpdateData} >Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
