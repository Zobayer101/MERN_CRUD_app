import { useEffect, useState } from "react";
import  "../css/Bord.css";
import Bprofile from "./Bprofile";

const Bord = () => {
  var [data, setData] = useState(null);
  var [preiod, setPreiod] = useState(0);
   
    useEffect(() => {
        (async () => {
            try {
                let response = await fetch(
                  "http://localhost:3300/route/api/read",
                  {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                );
                let result = await response.json();
                console.log("data useEffect");
                setData(result.data);
                
            } catch (error) {
                alert(JSON.stringify(error))
            }
       })()
    }, [])
    if (!data) {
        return ( 
            <p className="Lodaing">Lodaing...</p>
        )
  }
  const clickHandel = (e) => {
    setPreiod(e.target.dataset.id)
     console.log(e.target.dataset.id)
  }
  
    return (
      <div>
        <div className="leaderCon">
          <div className="leaderbtn">
            <button onClick={(e) => clickHandel(e)} data-id="7">
              7 Day
            </button>
            <button onClick={(e) => clickHandel(e)} data-id="30">
              30 Day
            </button>
            <button onClick={(e) => clickHandel(e)} data-id="0">
              all-time
            </button>
          </div>

          <Bprofile data={bettwn(data,preiod)} />
        </div>
      </div>
    );
}

const bettwn = (data, delay) => {

  var Today = DayCreate(new Date());
  var previusDay = Today - delay;
  return data.filter((val) => {
    var BackDay = new Date(val.date);
    var BackenDataDay = DayCreate(BackDay);
    if (delay == 0) return val;
    console.log(BackenDataDay)
    return previusDay <= BackenDataDay && Today >= BackenDataDay;
  })

}

const DayCreate = (date) => {
  return date.getUTCDate() + date.getMonth() * 30;
}

// 

export default Bord;
