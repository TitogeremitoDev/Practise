import './App.css'
import CuadroColor from './components/CuadroColor'

function App() {


  const colors={
    color1: "red",
    color2 : "white",
    color3: "blue",
    color4: "yellow",
    color5: "pink",
  }

  return (
    <>
      <div className='ContenedorColores' >
        {/* ESTO DE AQUI ES SI QUISIERA RECORRER EL MAP COMPLETO */}
          {/* {Object.values(colors).map((color, index) => (
            <CuadroColor 
              key={index} 
              color={color} 
            />
                  ))} */}


                  <CuadroColor color={colors.color1} />
                  <CuadroColor color={colors.color2} />
                  <CuadroColor color={colors.color3} />
                  <CuadroColor color={colors.color4} />
                  <CuadroColor color={colors.color5} />


      </div>
    </>
  )
}




export default App



