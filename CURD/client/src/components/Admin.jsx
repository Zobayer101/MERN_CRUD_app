import { useState } from "react";
import "../assets/css/Admin.css";
import Image from "../assets/img/profile.png";
import Modal  from "./Modal";
import Profile from "./Profile";

const Admin = () => {
  let [open, setOpen] = useState(false);
  
  
  return (
    <div>
      {open ? <Profile open={open} setOpen={setOpen} /> : ""}
      <div className="outerAdmin">
        <div className="innerAdmin">
          <div className="header">
            <div className="text">
              <h2>Admin Paneal</h2>
            </div>
            <div className="img">
              <img src={Image} alt="" />
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
                <tr>
                  <td className="Pad1">1</td>
                  <td className="Pad1">MD</td>
                  <td className="Pad1">habib@gmail.com</td>
                  <td className="BTN">
                    <button
                      onClick={() => {
                        Modal(open, setOpen);
                      }}
                      className="more"
                    >
                      more
                    </button>
                    <button className="remove">Remove</button>
                  </td>
                </tr>

                <tr>
                  <td className="Pad1">1</td>
                  <td className="Pad1">MD</td>
                  <td className="Pad1">MDhabib@gmail.com</td>
                  <td className="BTN">
                    <button
                      onClick={() => {
                        Modal(open, setOpen);
                      }}
                      className="more"
                    >
                      more
                    </button>
                    <button className="remove">Remove</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Admin;
