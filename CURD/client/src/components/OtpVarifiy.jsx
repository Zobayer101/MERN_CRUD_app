import { IoShieldCheckmarkSharp } from "react-icons/io5";

import '../assets/css/Otp.css';
import { useEffect, useRef, useState } from "react";
const OtpVarifiy = () => {
  let [num, setNum] = useState({ num1: '', num2: '', num3: '', num4: '' })
  //input filds init
    let input = useRef();
    let input2 = useRef();
    let input3 = useRef();
    let input4 = useRef();
    let subref = useRef();
    //counter function.
    
    
    useEffect(() => {
        if (!num.num1) {
            !num.num2 && !input.current.hasAttribute("disabled")
                ? input2.current.setAttribute("disabled", null) : '';
             input.current.focus(); 
        }
        else if (num.num1 && !num.num2) {
            
           !num.num3 && !input3.current.hasAttribute("disabled")
              ? input3.current.setAttribute("disabled",null)
              : input2.current.removeAttribute("disabled");
             
            input2.current.focus();
        }
        else if (num.num2 && !num.num3) {
            !num.num4 && !input4.current.hasAttribute("disabled")
                ? input4.current.setAttribute('disabled', null)
                : input3.current.removeAttribute("disabled");
            input3.current.focus();
        } else if (num.num3 && !num.num4) {
            input4.current.removeAttribute("disabled");
            input4.current.focus();
        } else if (num.num4 && num.num3 && num.num2 && num.num1) {
          subref.current.removeAttribute("disabled");
          subref.current.classList.remove('btn');
          
      }
      if (!num.num4 || !num.num3 || !num.num2 || !num.num1) {
        subref.current.setAttribute("disabled", null);
        subref.current.classList.add("btn")
      
        }
   
    }, [num]);
    
  var CounterFun = (value, propaty) => {
     
    if(num[propaty].length < 1 || value==''){
      setNum((pre) => ({
        ...pre,
        [propaty]: value,
      }));
    } else {
      alert(' fild fillup ')
    }
}
    var CreateAcount = () => {
        console.log(num)
    }
    
  
  return (
    <div>
      <div className="otpCountner">
        <div className="otpInnerCounter">
          <div className="otpheader">
            <div className="icon">
              <IoShieldCheckmarkSharp className="sheld" />
            </div>
            <h2>Enter OTP Code</h2>
          </div>

          <form className="Form" action="#">
            <div className="num">
              <input
                maxLength={1}
                ref={input}
                value={num.num1}
                onChange={(e) => CounterFun(e.target.value, "num1")}
                type="number"
              />
              <input
                maxLength={1}
                value={num.num2}
                ref={input2}
                onChange={(e) => CounterFun(e.target.value, "num2")}
                name="bangla"
                type="number"
                disabled
              />
              <input
                maxLength={1}
                value={num.num3}
                ref={input3}
                onChange={(e) => CounterFun(e.target.value, "num3")}
                type="number"
                disabled
              />
              <input
                maxLength={1}
                value={num.num4}
                ref={input4}
                onChange={(e) => CounterFun(e.target.value, "num4")}
                type="number"
                disabled
              />
            </div>
            <div className="subButton">
              <button ref={subref} type="submit" onClick={CreateAcount}>
                {" "}
                verifyed OTP{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpVarifiy;
