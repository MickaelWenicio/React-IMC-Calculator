import React from 'react'
import './InitialScreen.css'
import { useNavigate } from 'react-router-dom'

const InitialScreen = () => {
    const navigate = useNavigate()
    const handleCalculateClick = () => {
        
        navigate('/result');
    };
  return (
    <div id='mainDiv'>
        <h1>Calculadora de IMC</h1>
        <form>
            <label htmlFor="weight">
                <span>Peso</span>
                <input type="number" placeholder='exemplo: 75kg'/>
            </label>
            <label htmlFor="height">
                <span>Altura</span>
                <input type="number" placeholder='exemplo: 180cm'/>
            </label>
            <div>
                <button id='submit' type="button" onClick={handleCalculateClick}>CALCULAR</button>
                <button id='reset' type="reset">LIMPAR</button>
            </div>
            
        </form>
    </div>
  )
}

export default InitialScreen