import React from "react";
import useHover from "./useHover";
import tinycolor from 'tinycolor2';
import useClick from "./useClick";
import usePress from "./usePress";

function CuadroColor({color}){

  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
  const {isClicked, clicked} = useClick();
  const {isPressed,pressed}= usePress()

  let displayedColorText ="";
  // Aquí es donde se calcula el texto que se mostrará.
  // Si 'isClicked' es verdadero, mostramos el valor hexadecimal del color.
  // De lo contrario, no mostramos nada (una cadena vacía).

  if (isPressed!=0) {
    if(isPressed==1)
        displayedColorText=color
        else {
        displayedColorText = tinycolor(color).toHexString();
    }
  } else if (isHovered) {
    // CONDICIÓN 2: Si NO está "presionado", pero SÍ está en hover...
    if (isClicked) {
      // CONDICIÓN 2.1: ...y también está clicado, muestra el hexadecimal.
      // "al clickarlo... que cambie el texto de hexadecimal a letras"
      // (Aquí asumo que el texto original es "letras" y cambia a hexadecimal al clickar)
      displayedColorText = tinycolor(color).toHexString();
    } else {
      // CONDICIÓN 2.2: ...y NO está clicado, muestra el color original (letras).
      displayedColorText = color;
    }
  } else {
    // CONDICIÓN 3: Si NO está "presionado" Y NO está en hover, no muestra nada.
    // "si no esta press o hove que no muestre nada"
    displayedColorText = "";
  }




  // const displayedColorText = !isHovered 
  //   ? "" // Si está en hover mostrara el texto.
  //   : (isClicked 
  //       ? tinycolor(color).toHexString() // Si NO está en hover PERO sí está clicado, mostrar HEX.
  //       : (isPressed // Si NO está en hover Y NO está clicado, comprobar isPressed.
  //           ? tinycolor(color).toHexString() // Si está presionado, mostrar HEX (esto parece redundante con isClicked)
  //           : color // Si ninguna de las anteriores, mostrar el color original.
  //         )
  //     );


return(
    
    <div
      tabIndex={0} // Permite que el div sea enfocado
      className="cuadroColor"

      style={{
        display:"flex",
        flexDirection: 'column',     // Apilamos los elementos verticalmente (en este caso, solo el <p>)
        alignItems: 'center',        // Centra horizontalmente los elementos hijos en el eje transversal (por defecto, horizontal)
        justifyContent: 'center', 
        width: '300px',
        height: '300px',
        backgroundColor: color,
        transform: isHovered ? 'scale(1.2)' : 'scale(1)', // Efecto al hacer hover
        transition: 'transform 0.3s ease',
        border: isHovered ? '2px solid pink' : 'none'
      }
    
    }
            onMouseEnter={handleMouseEnter}  // Asignamos los handlers
            onMouseLeave={handleMouseLeave}
            
            onClick={clicked}
            
            onKeyDown={pressed}

            >
        <p>{displayedColorText}</p>
    </div>
)



}

export default CuadroColor;