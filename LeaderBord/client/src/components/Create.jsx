import '../css/Creae.css'
import avatar from '../assets/img/profile.png'
import { useState } from 'react';
//import axios from 'axios';


const Create = () => {
  //state initilize
  const [data, setData] = useState({ name: '', date: '', city: '', photo: '' });
  // data submit api url
  const url = "http://localhost:3300/route/api/save";
    const handelChange = (value,propaty) => {
        setData((previus) => ({
            ...previus,
            [propaty]:value
        }))
  }
  var myfile;
    const ImgHandler = async (files) => {
        
        myfile = await ConverterBase64(files);
        
        setData({...data,photo:myfile})
  }
  //submit data fun
  // const SendBackend = async (data) => {
  //   try {
  //     console.log(data)
  //     await axios.post(url,data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  //submit chack data 
  const submitData = () => {
    
    const { name, date, city, photo } = data;
    if ([name && date && city && photo] == '') {
      alert(`you can't empty fild submitd`);
    } else {
      alert(`all is well `)
      // fetch api send data
      //SendBackend(data);
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
     
    }
  }
 
    return (
      <>
        
        <div className="outerContuner">
          <div className="countuner">
            <div className="scoundCon"></div>
            <div className="proCover">
              <div className="profile">
                <input
                  type="file"
                  onChange={(e) => {
                    ImgHandler(e.target.files[0]);
                  }}
                  id="file"
                  accept=".png , .jpeg, .jpg "
                />
                <img src={data.photo || avatar} alt="" />
              </div>
            </div>
            <div className="filds">
              <input
                type="text"
                value={data.name}
                onChange={(e) => {
                  handelChange(e.target.value, "name");
                }}
                placeholder="Enter your name"
              />
              <br />
              <input
                type="date"
                value={data.date}
                onChange={(e) => {
                  handelChange(e.target.value, "date");
                }}
              />
              <br />
              <input
                type="text"
                value={data.city}
                onChange={(e) => {
                  handelChange(e.target.value, "city");
                }}
                placeholder="Enter your city name"
              />
              <div className="buttonSub">
                <button  onClick={ submitData}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </>
    );
}
const ConverterBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const filereder = new FileReader();
        filereder.readAsDataURL(file);
        filereder.onload = () => {
            resolve(filereder.result)
        }
        filereder.onerror = (error) => {
            reject(error)
        }
    })
}
export default Create;