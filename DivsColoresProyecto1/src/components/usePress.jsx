import { useState, useRef } from "react";



function usePress(){

const [isPressed,setIsPressed]= useState(0)
  const timerRef = useRef(null);              // guarda el id del setTimeout


  const pressed = () => {
    if (isPressed===0){
        setIsPressed(1);
        clearTimeout(timerRef.current);
    }
    else if (isPressed===1){
        setIsPressed(2)
        clearTimeout(timerRef.current);

    }
    else if (isPressed===2){
        setIsPressed(1)
        clearTimeout(timerRef.current);
    }}


if(isPressed!==0){
    timerRef.current = setTimeout(() => setIsPressed(0), 1000);
}



return{isPressed,pressed}

}


export default usePress;