import React from 'react'
import './InitialScreen.css'
import { useNavigate } from 'react-router-dom'

const InitialScreen = ({weight, height, setHeight, setWeight, cleanForms}) => {
    const navigate = useNavigate()

    //FUNCTIONS
    const handleCalculateClick = (e) => {
        if(height && weight){
            e.preventDefault()
            navigate('/result');
        } else {
            window.alert("preencha os campos corretamente.")
        }
    };
    

  return (
    <div id='mainDiv'>
        <h1>Calculadora de IMC</h1>
        <form>
            <label htmlFor="weight">
                <span>Peso</span>
                <input type="number" placeholder='exemplo: 75kg' name='weight' value={weight} onChange={(e) => setWeight(e.target.value)}/>
            </label>
            <label htmlFor="height">
                <span>Altura</span>
                <input type="number" placeholder='exemplo: 180cm' name='height' value={height} onChange={(e) => setHeight(e.target.value)}/>
            </label>
            <div>
                <button id='submit' type="button" onClick={handleCalculateClick}>CALCULAR</button>
                <button id='reset' type="reset" onClick={()=>{cleanForms()}}>LIMPAR</button>
            </div>
            
        </form>
    </div>
  )
}

export default InitialScreen