import { useState } from "react";



function useClick(){

const [isClicked,setIsClicked]= useState(false)


  // setIsClicked será la función para cambiar ese estado

// damos opciones al estado setIsClicked
  const clicked = () => {
    if (isClicked===false){
        setIsClicked(true);
    }
    else{
        setIsClicked(false);
    }
  };



return{isClicked,clicked}

}


export default useClick;