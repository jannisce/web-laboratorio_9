import './Container.css'
import Boton from '../Boton/Boton'
import Display from '../Display/Display'
import { useState } from 'react'

const Container = () => {
  const [resultado, setResultado] = useState(0)
  return (
      <div className="container">
        <Display result={resultado} />
        <div className="operadores">
          <Boton operador={"AC"}/>
          <Boton operador={"+/-"}/>
          <Boton operador={"%"}/>
          <Boton operador={"/"}/>
          <Boton operador={"7"}/>
          <Boton operador={"8"}/>
          <Boton operador={"9"}/>
          <Boton operador={"x"}/>
          <Boton operador={"4"}/>
          <Boton operador={"5"}/>
          <Boton operador={"6"}/>
          <Boton operador={"-"}/>
          <Boton operador={"1"}/>
          <Boton operador={"2"}/>
          <Boton operador={"3"}/>
          <Boton operador={"+"}/>
          <Boton operador={"00"}/>
          <Boton operador={"0"}/>
          <Boton operador={"."}/>
          <Boton operador={"="}/>
          
          
        </div>
      </div>
  )
}

export default Container
