import { useEffect, useState } from "react";
import "../assets/css/Admin.css";
import Image from "../assets/img/profile.png";
import Modal from "./Modal";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  let [open, setOpen] = useState(false);
  let [alldata, setAlldata] = useState(null);
  let [user, setUser] = useState(null);
  let [ID, setID] = useState(null);
  let navigate = useNavigate();

  // fetch all data
  let TOKEN = localStorage.getItem("TOKEN");
  let url = "http://localhost:3300/route/user/data/api/remove";
  useEffect(() => {
    let url = "http://localhost:3300/route/api/read";

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        TOKEN,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (result.data && result.user) {
          setAlldata(result.data);
          setUser(result.user);
        } else {
          localStorage.removeItem("TOKEN");
          navigate("/Login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [navigate, TOKEN]);

  let Remove = async (index) => {
    try {
      let res = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          TOKEN: TOKEN,
          ID: ID,
        },
      });
      let result = await res.json();
      if (result.data) {
       
        setAlldata((existdata) => {
          return existdata.filter((_, currentIndex) => currentIndex !== index);
        });
      } else {
        // localStorage.removeItem('TOKEN');
        // navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  if (!alldata) return <h2>Loading...</h2>;
  else if (alldata.msg) {
    localStorage.removeItem("TOKEN");
    navigate("/login");
  }

  return (
    <div>
      {open ? <Profile open={open} setOpen={setOpen} ID={ID} /> : ""}
      <div className="outerAdmin">
        <div className="innerAdmin">
          <div className="header">
            <div className="text">
              <h2>Admin Paneal</h2>
            </div>
            <div className="img">
              <img src={user.photo || Image} alt="" />
            </div>
          </div>
          <div className="mainTable">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Fname</th>
                  <th>Email</th>
                  <th>Activitive</th>
                </tr>
              </thead>
              <tbody>
                {alldata.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td className="Pad1">{index + 1}</td>
                      <td className="Pad1">{value.fname}</td>
                      <td className="Pad1">{value.email}</td>
                      <td className="BTN">
                        <button
                          onClick={() => {
                            Modal(open, setOpen);
                            setID(value._id);
                          }}
                          className="more"
                        >
                          more
                        </button>
                        <button
                          className="remove"
                          onClick={() => {
                            setID(value._id);
                            Remove(index);
                          }}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Admin;
