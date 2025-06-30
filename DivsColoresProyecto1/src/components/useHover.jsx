import { useState } from "react";



function useHover(){

const [isHovered,setIsHovered]= useState(false)

  // isHovered será true o false
  // setIsHovered será la función para cambiar ese estado

  // Cuando el mouse entra, ponemos isHovered a true
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Cuando el mouse sale, ponemos isHovered a false
  const handleMouseLeave = () => {
    setIsHovered(false);
  };


return{isHovered, handleMouseEnter, handleMouseLeave}

}


export default useHover;