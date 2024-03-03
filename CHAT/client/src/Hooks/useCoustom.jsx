import { useEffect, useState } from "react";

const useCoustom = (value) => {
    
    const [screen, setScreen] = useState(false);
   
    useEffect(() => {
         const changeScreen = () => {
           setScreen(window.innerWidth > value);
         };
        changeScreen();
        window.addEventListener('resize', changeScreen);
        return () => {
            window.addEventListener('resize', changeScreen);
        }
    },[value])

 return screen
}

export default useCoustom;